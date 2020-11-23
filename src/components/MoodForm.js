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

const PROMPTS_URL = "http://localhost:3001/prompts"

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
  }
}));



export default function MoodForm() {
  
  const [prompts, setPrompts]=useState([])
  const [randomPrompt, setRandomPrompt]=useState("")

  const getPrompts = async () => {
    try {
      const userPrompts = await 
      axios.get(PROMPTS_URL)
      // console.log(userPrompts.data)
      setPrompts(userPrompts.data); //set state

    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(()=>{
    getPrompts()
  }, [])

  useEffect(()=>{
    if (prompts.length > 0){
      let randomIndex = Math.floor(Math.random() * prompts.length); 
      setRandomPrompt(prompts[randomIndex].statement);
    }
  },[prompts]) //this will run when prompts changes


  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.value)
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
        <form>
        <label><Typography variant="h2"> How are you feeling right now?</Typography></label>

        <br /> 
        
        <input value={5} type="image" src={Bear1} onClick={handleClick} />
        <input value={4} type="image" src={Bear2} onClick={handleClick} />
        <input value={3} type="image" src={Bear3} onClick={handleClick} />
        <input value={2} type="image" src={Bear4} onClick={handleClick} />
        <input value={1} type="image" src={Bear5} onClick={handleClick} />
        <br /> 
        <br /> 

        <label><h1>{randomPrompt}</h1></label> 
        <br />
        <form className={classes.root} noValidate autoComplete="off">
      <div>

        <TextField
          id="outlined-multiline-static"
          label="Your response"
          multiline
          rows={5}
          variant="outlined"
        />
      </div>
    </form>
        <Button onClick={()=> alert("hello")} variant="contained" color="primary">
          Submit
        </Button>
          </form>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
