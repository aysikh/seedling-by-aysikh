import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

const GOALS_URL = "http://localhost:3001/goals"

class LogInForm extends Component {

  state = {
    name: "",
    email: "", 
    password: "",
    goals: ""
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="Name..."
        />
        <br/>
        <br/>
        <label>Email Address: </label>
        <input
          type="text" 
          value={this.state.email} 
          name="email" 
          placeholder="Email Address..." 
          // onChange={this.handleChange}
          />
        <br />
        <br />
        <label>Password: </label>
        <input
          type="text" 
          value={this.state.password} 
          name="password" 
          placeholder="Password..." 
          // onChange={this.handleChange}
          />
        <br /> 
        <br /> 
        <label>What are your goals? </label>

        <Button onClick={()=> alert("hello")} variant="contained" color="blue">
          Submit
        </Button>
        </form>
      </div>
    )
  }
}

export default LogInForm