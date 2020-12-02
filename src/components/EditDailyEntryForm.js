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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const PROMPTS_URL = "http://localhost:3001/prompts"
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
    padding: theme.spacing(4, 6, 2),
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
    height: "13.5rem",
    margin: "8px"
  },
  withBorder: {
    textAlign: "center",
    color: "#000",
    border: "solid 4px transparent",
    padding: "12px 12px 12px 12px",
    margin: "0px 0px 10px 0",
    height: "14.5rem",
    margin: "8px"
  },

}));


export default function EditDailyEntryForm(props) {
  let history = useHistory();

  const [prompts, setPrompts]=useState([])
  const [rating, setRating]=useState(0)
  const [selected, setSelected] = useState(0)
  const [content, setContent]=useState("")
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = React.useState("")
  const userID = user
  const [currentUser, setCurrentUser]=useState({})
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
    setCurrentUser(props.findID())
  }

  useEffect(() => {
    getPrompts()
    getUsers()
  }, [])


  useEffect (() => {
    console.log("selected: ", selected)
  }, [selected])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editRating = (event) => {
      setSelected(event.target.value)
  }

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
    props.setView(false)
    let entryID = props.findID().id
      let requestPackage ={
        headers: {'Content-Type':'application/json'},
        method: 'PATCH',
        body: JSON.stringify({
          rating: selected,
          content: content,
        })
      }
      fetch(`http://localhost:3001/daily_entries/${entryID}`, requestPackage)
      .then(rsp => rsp.json())
      .then(window.location.reload())
    
}
  
  return (
    <div>
        <br /> <br />
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
        <input 
          value={5} 
          type="image" 
          src={Bear1} 
          onClick={handleClick}
          onChange={editRating}
          className={selected === "5" ? classes.withBorder : classes.noBorder}
          // className={classes.image}
          />
        <input 
            value={4} 
            type="image" 
            src={Bear2} 
            onClick={handleClick} 
            onChange={editRating}
            className={selected === "4" ? classes.withBorder : classes.noBorder}
            // className={classes.image}
          />
        <input 
          value={3} 
          type="image" 
          src={Bear3} 
          onClick={handleClick} 
          onChange={editRating}
          className={selected === "3" ? classes.withBorder : classes.noBorder}
          // className={classes.image}
        />
        <input 
          value={2} 
          type="image" 
          src={Bear4} 
          onClick={handleClick} 
          onChange={editRating}
          className={selected === "2" ? classes.withBorder : classes.noBorder}
          // className={classes.image}
        />
        <input 
          value={1} 
          type="image" 
          src={Bear5} 
          onClick={handleClick} 
          onChange={editRating}
          className={selected === "1" ? classes.withBorder : classes.noBorder}
          // className={classes.image}
        />
        
        <br /> 
        <br />
        <center>
        <label>Prompt Here </label> 
        <br /> 
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
        <Button type="submit" variant="contained" color="primary" >
          Submit
        </Button>
    {/* </form> */}
        </center>
          </form>
        </div>
        </Fade>
    </Modal>
    </div>
  );
}
