import React, { Component } from 'react'
// import { NavLink, Redirect, Link } from 'react-router-dom'
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import LogInContainer from './LogInContainer'
import NewUserContainer from './NewUserContainer'
import NewUserForm from '../components/NewUserForm'
import Container from '@material-ui/core/Container'
import Navbar from '../components/Navbar'
import HomepageContainer from './HomepageContainer'
import Calendar from '../components/Calendar'
import JournalForm from '../components/JournalForm'
import Main from '../components/Main'
import DailyEntryForm from '../components/DailyEntryForm'
import CalendarContainer from './CalendarContainer'

export default function MainContainer() {
  return (
    <div>
      <Container maxWidth="lg">
      <Navbar />
    {/* <h1> main container </h1>  */}
      <Switch>
        <Route path="/logout" component={LogInContainer} />
        <Route exact path="/user/newuser" component={NewUserForm} />
        <Route exact path ="/user/home" component={HomepageContainer} />
        <Route exact path="/user/calendar" component={CalendarContainer} />
        <Route exact path="/user/journal" component={JournalForm} />
        <Route exact path="/user/stats" component={Main} />
        <Route exact path ="/user/dailyentry" component={DailyEntryForm} />
      </Switch>
      </Container>
    </div>
  )
}