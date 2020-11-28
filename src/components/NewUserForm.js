import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
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
import Logo from '../assets/signinlogo1.png'

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

export default function NewUserForm(props) {
  let history = useHistory();
  
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [goals, setGoals]=useState([])
  const [errors, setErrors]=useState([])
  const [checkedItems, setCheckedItems] = useState({})
  const classes = useStyles();
  
  const handleName = (event) => {
    setName(event.target.value)
  }
  
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleGoals = (event) => {
    setGoals(event.target.value)
  }
  
  const handleChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.value] : event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      name: name,
      email: email,
      password: password,
      goals: goals
    }

    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.status === 'created') {
            props.handleLogin(response.data)
            redirect()
          } else {
            setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
      };

    const redirect = () => {
        props.history.push('/')
      }

    const handleErrors = () => {
        return (
          <div>
            <ul>{errors.map((error) => {
              return <li key={error}>{error}</li>
            })}
            </ul> 
          </div>
        )
      }

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
  
  useEffect(()=>{
    console.log("checkedItems: ", checkedItems);
  },[checkedItems])
  
  
  const handleNewUserSubmit = (event) =>{
    event.preventDefault()
    
    let requestPackage ={
      headers: {'Content-Type':'application/json'},
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        goals: checkedItems
      })
    }
    fetch("http://localhost:3001/users", requestPackage)
    .then(rsp => rsp.json())
    .then(history.push("/user/home"))
  }
  
  // const testClick = (event) => {
  //   console.log(event.target[0].value)
  // }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Logo} style={{height: "30vh"}}/>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form 
          className={classes.form} 
          noValidate 
          onSubmit={(event) => {
          handleNewUserSubmit(event)}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleName}
                name="name"
                variant="outlined"
                required
                fullWidth
                type="name"
                id="name"
                label="Name: "
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handleEmail}
                name="email"
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address: "
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handlePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
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
                    control={<Checkbox 
                      value={goal.name} 
                      icon={<FavoriteBorder />} 
                      checkedIcon={<Favorite />} 
                      color="secondary" 
                      checked={checkedItems[goal.name]}
                      onChange={handleChange}
                      />}
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
      <div>
          {
            errors ? handleErrors() : null
          }
        </div>
    </Container>
  );
}