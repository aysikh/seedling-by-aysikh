  import React, { useEffect, useState } from 'react'
  import Bear1 from '../assets/bear1.png'
  import Bear2 from '../assets/bear2.png'
  import Bear3 from '../assets/bear3.png'
  import Bear4 from '../assets/bear4.png'
  import Bear5 from '../assets/bear5.png'

  import axios from 'axios'
  import { makeStyles } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button'
  import TextField from '@material-ui/core/TextField';
  import Typography from '@material-ui/core/Typography';
  import { useHistory } from 'react-router-dom'

  const PROMPTS_URL = "http://localhost:3001/prompts"
  // const MOODS_URL = "http://localhost:3001/moods"
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
      borderStyle: 'solid',
      color: "#000",
      border: "solid 4px #838383",
      padding: "12px 12px 12px 12px",
      margin: "0px 0px 10px 0",
    },
    image: {
      height: "13.5rem",
      margin: "8px"
    }
  }));


  export default function MoodForm() {
    let history = useHistory();

    const [prompts, setPrompts]=useState([])
    const [randomPrompt, setRandomPrompt]=useState("")
    const [randomPromptID, setRandomPromptID]=useState("")
    // const [moods, setMoods]=useState([])
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
      // getMoods()
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
      // console.log(event)
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
        .then(history.push("/calendar"))
        //history.push("/calendar")
      }
  }
    
    return (
      <div>
          <br /> <br />
          <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={(event) => {handleSubmit(event)}}>
          <label><Typography variant="h3"><b> How are you feeling right now?</b></Typography></label>
          <br /> <br /> <br />
          <center>
          <input 
            value={5} 
            type="image" 
            src={Bear1} 
            onClick={handleClick}
            className={selected === 5 ? classes.withBorder : classes.noBorder}
            className={classes.image}
            />
          <input 
              value={4} 
              type="image" 
              src={Bear2} 
              onClick={handleClick} 
              className={selected === 4 ? classes.withBorder : classes.noBorder}
              className={classes.image}
            />
          <input 
            value={3} 
            type="image" 
            src={Bear3} 
            onClick={handleClick} 
            className={selected === 3 ? classes.withBorder : classes.noBorder}
            className={classes.image}
          />
          <input 
            value={2} 
            type="image" 
            src={Bear4} 
            onClick={handleClick} 
            className={selected === 2 ? classes.withBorder : classes.noBorder}
            className={classes.image}
          />
          <input 
            value={1} 
            type="image" 
            src={Bear5} 
            onClick={handleClick} 
            className={selected === 1 ? classes.withBorder : classes.noBorder}
            className={classes.image}
          />
          </center>
          <br /><br /> 
          <center>
          <label><h1>{randomPrompt}</h1></label> 
          <br />
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
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </center>
            </form>
          </div>
      </div>
    );
  }
