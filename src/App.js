import React, { Component } from 'react'
import './App.css'
import MainContainer from './containers/MainContainer'
import LogInContainer from './containers/LogInContainer'
import NewUserContainer from './containers/NewUserContainer'
import NewUserForm from './components/NewUserForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render(){
    return(
    <BrowserRouter>
    <Navbar />
      <div>
        <Switch>
          <div>
            <Route path="/login" component={LogInContainer} />
            <Route path="/home" component={MainContainer} />
            <Route path="/newuser" component={NewUserForm} />

          </div>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App