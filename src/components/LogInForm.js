import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {Link} from 'react-router-dom'

const LogInForm = (props) =>  {

  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [errors, setErrors]=useState("")

  useEffect(()=> {
    return props.loggedInStatus ? redirect() : null
  }, [])

  const handleEmailChange = (event) => {
      setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let user = {
          name: name,
          email: email,
          password: password
        }
        
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            props.handleLogin(response.data)
            redirect()
          } else {
            setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
      };

    const redirect = () => {
        props.history.push('/')
      }

    const handleErrors = () => {
        return (
          <div>
            <ul>
            {errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      }

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Email Address: </label>
        <input
          type="text" 
          value={this.state.email} 
          name="email" 
          placeholder="Email Address..." 
          onChange={handleEmailChange}
          />
        <br />
        <br />
        <label>Password: </label>
        <input
          type="text" 
          value={this.state.password} 
          name="password" 
          placeholder="Password..." 
          onChange={handlePasswordChange}
          />
        <br /> 
        <Button 
          endIcon={<ArrowForwardOutlinedIcon />}
          variant="contained" 
          color="primary">
          Submit
        </Button>
        </form>
        <div>
          {
            errors ? handleErrors() : null
          }
        </div>
      </div>
    )

}

export default LogInForm