import React, { Component } from 'react'
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

class App extends Component {


  render(){
    return(
    <BrowserRouter>
    
    {/* <MainContainer />  */}
    {/* <LogInContainer />  */}

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
}

export default App