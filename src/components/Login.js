import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const login = () => {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [errors, setErrors]=useState("")

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
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="username"
                type="text"
                name="name"
                value={username}
                onChange={handleNameChange}
            />
            <input
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={handleemailChange}
            />
            <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
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