import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import axios from 'axios'
import Welcome from '../assets/welcome.png'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Seedling
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  position: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '37rem',
    marginTop: 'auto'
  },
  paperContent: {
    margin: theme.spacing(6, 8),
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
    marginBottom: theme.spacing(4),
    alignItems: "center",
    marginTop: '1rem'
  },
  submit: {
    margin: '3px',
    fontSize: '1.3rem',
    fontColor: 'white'
  },
}));

export default function LogInForm({checked}, props) {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [errors, setErrors]=useState("")

    // useEffect(()=> {
    //   return props.loggedInStatus ? redirect() : null
    // }, [])

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const handleSubmit = (event) => {
      event.preventDefault()

      let user = {
            email: email,
            password: password
          }
        
      fetch('http://localhost:3001/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
        console.log(data)
          if (data.errors) {
            alert("Invalid Credentials")
          }
          else {
            // props.setCurrentUser(data.info)
            console.log(data.info)
            history.push('/home')
          }
        })
      
    };
        


    const handleErrors = () => {
        return (
          <div>
            <ul>
            {errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      }

      
    return (
      <div>

      <Grid container spacing={20} component="main" style={{ alignItems: 'center'}} >
          <CssBaseline />
          {/* <Grid item xs={6} >
                <img src={Welcome} style={{height: '27rem', marginTop: '5rem'}}/>
            </Grid> */}
          <Grid item s={8} component={Paper} elevation={6} className={classes.position}>
          <div className={classes.paperContent}>
              <img src={Welcome} style={{height: '16rem', marginTop: '0rem'}} />
              {/* <Typography component="h1" variant="h5"> */}
              {/* Sign in */}
              {/* </Typography> */}
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
              />
              <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
              />
              <div>
                <center>
                  <Button 
                    fullWidth 
                    color='secondary' 
                    variant='contained' 
                    type='submit' 
                    className={classes.submit}
                    >
                    <Link href="/home" style={{textDecoration: 'none'}}>
                        {"Sign In"}
                    </Link>
                  </Button>
                </center>
              </div>
              <Grid container>
                  <Grid item>
                  <Button> 
                  <Link href="/newuser" variant="body2" style={{textDecoration: 'none'}}>
                      {"Don't have an account? Sign Up"}
                  </Link>
                  </Button> 
                  </Grid>
              </Grid>
              <Box mt={5}>
                  <Copyright />
              </Box>
              </form>
              <div>
                  {
                      errors ? handleErrors() : null
                  }
              </div>
          </div>
          </Grid>
    </Grid>
    </div> 
    )
  
}
