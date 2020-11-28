import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const login = () => {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    handleSubmit = (event) => {
        event.preventDefault()
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
            <input
                placeholder="username"
                type="text"
                name="name"
                value={username}
                onChange={this.handleNameChange}
            />
            <input
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleemailChange}
            />
            <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handlePasswordChange}
            />
            <button placeholder="submit" type="submit">
                Log In
            </button>
            <div>
                or <Link to='/signup'>sign up</Link>
            </div>
            
            </form>
        </div>
        );
  
}
export default Login;