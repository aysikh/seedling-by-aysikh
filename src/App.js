import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import './App.css'
import MainContainer from './containers/MainContainer'
// import LogInContainer from './containers/LogInContainer'
import NewUserContainer from './containers/NewUserContainer'
import NewUserForm from './components/NewUserForm'
import Navbar2 from './components/Navbar2'
import DailyEntryForm from './components/DailyEntryForm'
// import Calendar from './components/Calendar'
import HomepageContainer from './containers/HomepageContainer'
import JournalForm from './components/JournalForm'
// import Stats from './components/Stats'
import Main from './components/Main'
import CalendarContainer from './containers/CalendarContainer'
// import NoMatchPage from './components/NoMatchPage'
import Home from './components/Home'
// import Login from './components/Login'
import LandingPage from './components/LandingPage'
import BG from './assets/bg.jpg'
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bg: {
      minHeight: '100vh',
      backgroundImage: `url(${BG})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0px',
        boxShadow: 'none'
    },
  }));

export default function App() {
  const classes = useStyles();

  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [user, setUser]=useState({})
  

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    loginStatus()
  }, [])


    return(
    <BrowserRouter>
      <div className={classes.bg}>
        <CssBaseline /> 
          {/* <Toolbar className={classes.appbarWrapper} >  */}
            <Navbar2 /> 
          {/* </Toolbar> */}
        <Switch>
          <div>
            {/* <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={handleLogout} loggedInStatus={isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} 
              handleLogin={handleLogin} 
              loggedInStatus={isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <NewUserForm {...props} 
              handleLogin={handleLogin} 
              loggedInStatus={isLoggedIn}/>
              )}
            /> */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomepageContainer} />
            <Route exact path="/user" component={MainContainer} />
            <Route path="/calendar" component={CalendarContainer} />
            <Route path="/journal" component={JournalForm} />
            <Route path="/stats" component={Main} />
            <Route path="/newuser" component={NewUserContainer} />
            <Route path="/dailyentry" component={DailyEntryForm} />
            {/* <Route component={NoMatchPage} /> */}
          </div>
        </Switch>
      </div>
    </BrowserRouter>
    )
}
