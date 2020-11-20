import React, { Component } from 'react'
// import { Route, Switch, Redirect, Link } from 'react-router-dom';
// import NavBar from './components/Navbar'
import LogInContainer from './LogInContainer'
// import NewUserContainer from './NewUserContainer'
import HomepageContainer from './HomepageContainer'

class MainContainer extends Component {
  render(){
    return(
      <div>
        <LogInContainer />
        I did something. 
        <HomepageContainer />
      </div>
    )
  }
}

export default MainContainer