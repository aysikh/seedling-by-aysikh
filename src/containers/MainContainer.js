import React, { Component } from 'react'
// import { NavLink, Redirect, Link } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LogInContainer from './LogInContainer'
import NewUserForm from '../components/NewUserForm'
import Container from '@material-ui/core/Container'
import Navbar2 from '../components/Navbar2'
import HomepageContainer from './HomepageContainer'
import DailyEntryForm from '../components/DailyEntryForm'
import CalendarContainer from './CalendarContainer'
import NoMatchPage from '../components/NoMatchPage'
import LandingPage from '../components/LandingPage'
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

export default function MainContainer(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
    </div>
  )
}