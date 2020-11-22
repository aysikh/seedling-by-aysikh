import React, { Component } from 'react'
// import { NavLink, Redirect, Link } from 'react-router-dom'
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import LogInContainer from './LogInContainer'
import NewUserContainer from './NewUserContainer'
import NewUserForm from '../components/NewUserForm'
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar'
import HomepageContainer from './HomepageContainer';

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
      </Switch>
      </Container>
    </div>
  )
}