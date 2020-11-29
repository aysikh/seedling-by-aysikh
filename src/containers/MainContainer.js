import React, { Component } from 'react'
// import { NavLink, Redirect, Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LogInContainer from './LogInContainer'
import NewUserContainer from './NewUserContainer'
import NewUserForm from '../components/NewUserForm'
import Container from '@material-ui/core/Container'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import HomepageContainer from './HomepageContainer'
import JournalForm from '../components/JournalForm'
import Main from '../components/Main'
import DailyEntryForm from '../components/DailyEntryForm'
import CalendarContainer from './CalendarContainer'
import NoMatchPage from '../components/NoMatchPage'
import LandingPage from '../components/LandingPage'
import LogContainer from './LogContainer'
import { CssBaseline } from '@material-ui/core';
import BG from '../assets/bg.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

export default function MainContainer() {
  const classes = useStyles();

  return (
    // <BrowserRouter>
    <div className={classes.root}>
      {/* <Container maxWidth="lg"> */}
      <CssBaseline />
      <LandingPage /> 
      <LogContainer />
      {/* <Switch> */}
        {/* <Route exact path="/" component={MainContainer} /> */}
        {/* <Route path="/logout" component={LogInContainer} />
        <Route exact path="/newuser" component={NewUserForm} />
        <Route exact path ="/user/home" component={HomepageContainer} />
        <Route exact path="/user/calendar" component={CalendarContainer} />
        <Route exact path="/user/journal" component={JournalForm} />
        <Route exact path="/user/stats" component={Main} />
        <Route exact path ="/user/dailyentry" component={DailyEntryForm} />
      </Switch> */}
      {/* </Container> */}
    </div>
    // </BrowserRouter>
  )
}