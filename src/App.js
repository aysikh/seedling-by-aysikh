import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import './App.css'
import MainContainer from './containers/MainContainer'
import NewUserContainer from './containers/NewUserContainer'
import Navbar2 from './components/Navbar2'
import DailyEntryForm from './components/DailyEntryForm'
import LandingPage from './components/LandingPage'
import BG from './assets/bg.jpg'
import BlogPostContainer from './containers/BlogPostContainer'

import HomepageContainer from './containers/HomepageContainer'
import CalendarContainer from './containers/CalendarContainer'
import BlogPostForm from './components/BlogPostForm'
import LogOutContainer from './containers/LogOutContainer';
import StatsContainer from './containers/StatsContainer'


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
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={HomepageContainer} />
            <Route exact path="/user" component={MainContainer} />
            <Route path="/calendar" component={CalendarContainer} />
            <Route path="/blogpost" component={BlogPostContainer} />
            <Route path="/stats" component={StatsContainer} />
            <Route path="/newuser" component={NewUserContainer} />
            <Route path="/dailyentry" component={DailyEntryForm} />
            <Route path="/logout" component={LogOutContainer} />
            {/* <Route component={NoMatchPage} /> */}
          </div>
        </Switch>
      </div>
    </BrowserRouter>
    )
}
