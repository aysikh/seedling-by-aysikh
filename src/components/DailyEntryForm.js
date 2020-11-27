  import React, { useEffect, useState } from 'react'
  import Bear1 from '../assets/bear1.png'
  import Bear2 from '../assets/bear2.png'
  import Bear3 from '../assets/bear3.png'
  import Bear4 from '../assets/bear4.png'
  import Bear5 from '../assets/bear5.png'

  import axios from 'axios'
  import { makeStyles } from '@material-ui/core/styles';
  import Modal from '@material-ui/core/Modal';
  import Backdrop from '@material-ui/core/Backdrop';
  import Fade from '@material-ui/core/Fade';
  import Button from '@material-ui/core/Button'
  import TextField from '@material-ui/core/TextField';
  import Typography from '@material-ui/core/Typography';
  import { useHistory } from 'react-router-dom'

  const PROMPTS_URL = "http://localhost:3001/prompts"
  const MOODS_URL = "http://localhost:3001/moods"
  const USERS_URL = "http://localhost:3001/users/1"

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
    noBorder: {
      textAlign: "center",
      color: "#000",
      border: "solid 4px transparent",
      padding: "12px 12px 12px 12px",
      margin: "0px 0px 10px 0",
    },
    withBorder: {
      textAlign: "center",
      color: "#000",
      border: "solid 4px #838383",
      padding: "12px 12px 12px 12px",
      margin: "0px 0px 10px 0",
    }
  }));


  export default function MoodForm() {
    let history = useHistory();

    const [prompts, setPrompts]=useState([])
    const [randomPrompt, setRandomPrompt]=useState("")
    const [randomPromptID, setRandomPromptID]=useState("")
    const [moods, setMoods]=useState([])
    const [rating, setRating]=useState(0)
    const [selected, setSelected] = useState(0)
    const [content, setContent]=useState("")
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [user, setUser] = React.useState("")
    const userID = user
    // const promptID = randomPrompt.id

    const getPrompts = async () => {
      try {
        let userPrompts = await 
        axios.get(PROMPTS_URL)
        // console.log(userPrompts.data)
        setPrompts(userPrompts.data); //set state

      } catch (err) {
        alert(err.message);
      }
    };
    
    const getMoods = async () => {
      try {
        const userMoods = await
        axios.get(MOODS_URL)
        // console.log(userMoods.data)
        setMoods(userMoods.data);
      } catch(err){
        alert(err.message)
      }
    }

    const getUsers = async () => {
      try { 
        let user = await
        axios.get(USERS_URL)
        // console.log(user.data.user.id)
        setUser(user.data.user.id)
      } catch(err){
        alert(err.message)
      }
    }

    useEffect(() => {
      getPrompts()
      getMoods()
      getUsers()
    }, [])

    useEffect(()=>{
      if (prompts.length > 0){
        let randomIndex = Math.floor(Math.random() * prompts.length); 
        setRandomPrompt(prompts[randomIndex].statement);
        setRandomPromptID(randomIndex)
      }
    },[prompts]) //this will run when prompts changes

    useEffect (() => {
      console.log("selected: ", selected)
    }, [selected])

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleClick = (event) => {
      event.preventDefault()
      setRating(event.target.value)
      setSelected(event.target.value)
    }

    const handleContent = (event) =>{
      setContent(event.target.value)
    }



    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(event)
      let c = content.split('')
      if (c.length > 0){
        let requestPackage ={
          headers: {'Content-Type':'application/json'},
          method: 'POST',
          body: JSON.stringify({
            rating: selected,
            content: content,
            user_id: userID,
            prompt_id: randomPromptID
          })
        }
        fetch("http://localhost:3001/daily_entries", requestPackage)
        .then(rsp => rsp.json())
        .then(history.push("/user/home"))
      }
  }

    
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => {handleSubmit(event)}}>
          <label><Typography variant="h3"> How are you feeling right now?</Typography></label>
          <br /> 
          {/* style={{width: "10%", height: "20%", position: 'absolute'}} */}
          <input 
            value={5} 
            type="image" 
            src={Bear1} 
            onClick={handleClick}
            className={selected == 5 ? classes.withBorder : classes.noBorder}
            />
          <input 
              value={4} 
              type="image" 
              src={Bear2} 
              onClick={handleClick} 
              className={selected == 4 ? classes.withBorder : classes.noBorder}
            />
          <input 
            value={3} 
            type="image" 
            src={Bear3} 
            onClick={handleClick} 
            className={selected == 3 ? classes.withBorder : classes.noBorder}
          />
          <input 
            value={2} 
            type="image" 
            src={Bear4} 
            onClick={handleClick} 
            className={selected == 2 ? classes.withBorder : classes.noBorder}
          />
          <input 
            value={1} 
            type="image" 
            src={Bear5} 
            onClick={handleClick} 
            className={selected == 1 ? classes.withBorder : classes.noBorder}
          />
          <br /> 
          <br />

          <label><h1>{randomPrompt}</h1></label> 
          <br />
          {/* <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => {handleSubmit(event)}}> */}
        <div>

          <TextField
            onChange={handleContent}
            id="outlined-multiline-static"
            label="Your response"
            multiline
            rows={5}
            variant="outlined"
          />
        </div>
        {/* <label><h2>What emotions are you feeling?</h2></label>
        <Grid container item xs={12}>
        {moods.map(mood =>
          <Grid item xs={2}>
            <FormControlLabel
            key={mood.id}
            control={<Checkbox value={mood.name} color="secondary"/>}
            label={mood.name}
            />
          </Grid>)}
          </Grid> */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
      {/* </form> */}
            </form>

            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
