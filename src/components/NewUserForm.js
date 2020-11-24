import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GOALS_URL = "http://localhost:3001/goals"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3001/login">
        Seedling
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewUserForm() {

  const [goals, setGoals]=useState([])

  const getGoals = async () =>{
    try {
      const userGoals = await
      axios.get(GOALS_URL)
      // console.log(userGoals.data);
      setGoals(userGoals.data);
    } catch (err){
      alert(err.message);
    }
  }

  useEffect(()=>{
    getGoals()
  }, [])

  const classes = useStyles();

  const handleNewUserSubmit = (event) =>{
    event.preventDefault()
    const name = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    const moodArray = []

    // let requestPackage ={
    //   headers: {'Content-Type':'application/json'},
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //     goals: ""
    //   })
    // }
    // fetch("http://localhost:3001/user", requestPackage)
    // .then(rsp => rsp.json())
    // .then(console.log)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => handleNewUserSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name: "
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
              <label><h2>What are you looking to improve?</h2></label>
            <Grid container item xs={12}>
              {goals.map(goal => (
                <Grid item xs={6}>
                  <FormControlLabel
                    key={goal.id}
                    control={<Checkbox value={goal.name} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="secondary" />}
                    label={goal.name}
                  />
                </Grid>
                  ))}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}







      // <div>
      //   <Container maxWidth="lg">
      // <form >
      //   <label>Name: </label>
      //   <input
      //     type="text"
      //     value="name"
      //     name="name"
      //     placeholder="Name..."
      //   />
      //   <br/>
      //   <br/>
      //   <label>Email Address: </label>
      //   <input
      //     type="text" 
      //     value="email"
      //     name="email" 
      //     placeholder="Email Address..." 
      //     // onChange={this.handleChange}
      //     />
      //   <br />
      //   <br />
      //   <label>Password: </label>
      //   <input
      //     type="text" 
      //     value="password"
      //     name="password" 
      //     placeholder="Password..." 
      //     // onChange={this.handleChange}
      //     />
      //   <br /> 
      //   <br /> 
      //   <label>What are your goals? </label>

      //   <Button onClick={()=> alert("hello")} variant="contained" color="blue">
      //     Submit
      //   </Button>
      //   </form>
      // </Container>

    
  
