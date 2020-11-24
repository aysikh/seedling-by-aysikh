import React, { Component, useState } from 'react'
import axios from 'axios'
import './App.css'
import MainContainer from './containers/MainContainer'
import LogInContainer from './containers/LogInContainer'
import NewUserContainer from './containers/NewUserContainer'
import NewUserForm from './components/NewUserForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar'
import HomepageContainer from './containers/HomepageContainer'
import JournalForm from './components/JournalForm'


export default function App() {

  const [isLoggedIn, setIsLoggedIn]=useState("true")
  

  const handleLogin = () => {
    setIsLoggedIn("true")
  }

  const handleLogout = () => {
    setIsLoggedIn("false")
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

    return(
    <BrowserRouter>
      <div>
        <Switch>
          <div>
            <Route path="/login" component={LogInContainer} />
            <Route path="/home" component={HomepageContainer} />
            <Route path="/user" component={MainContainer} />
            <Route path="/newuser" component={NewUserForm} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/journal" component={JournalForm} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
    )
}
