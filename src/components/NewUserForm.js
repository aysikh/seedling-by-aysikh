// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const GOALS_URL = "http://localhost:3001/goals"

export default function NewUserForm() {

  // state = {
  //   name: "",
  //   email: "", 
  //   password: "",
  //   goals: ""
  // }

  // one fetch call for goals
const fetchGoals= () => {   
  fetch(GOALS_URL)
  .then(rsp => rsp.json())
  .then(goals => console.log)
 }
  // another fetch call for new user

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [goals, setGoals] = useState(null)
  
  useEffect(fetchGoals, [goals])



    return (
      <div>
        <Container maxWidth="lg">
      <form >
        <label>Name: </label>
        <input
          type="text"
          value="name"
          name="name"
          placeholder="Name..."
        />
        <br/>
        <br/>
        <label>Email Address: </label>
        <input
          type="text" 
          value="email"
          name="email" 
          placeholder="Email Address..." 
          // onChange={this.handleChange}
          />
        <br />
        <br />
        <label>Password: </label>
        <input
          type="text" 
          value="password"
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
      </Container>
      </div>
    )
  
}
