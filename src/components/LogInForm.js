import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


class LogInForm extends Component {

  state = {
    email: "", 
    password: ""
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
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
        <Button 
          endIcon={<ArrowForwardOutlinedIcon />}
          onClick={()=> alert("hello")} 
          variant="contained" 
          color="primary">
          Submit
        </Button>
        </form>
      </div>
    )
  }
}

export default LogInForm