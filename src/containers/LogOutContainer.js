import React, { Component } from 'react'
import ForYou from '../assets/michelle1.png'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Redirect, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '70vh',
      marginTop: '1vh'
    }
  }))


const LogOutContainer = () => {
    const classes = useStyles();

    return(
        <div>
            <center>
            <img src={ForYou} className={classes.root}/>
            <br/> 
            <br/> 
            <Button style={{height: '2.5rem'}}>
              <Link to="/" variant="body2" style={{textDecoration: 'none', fontSize: '2rem'}}>
                        {"Back to Home"}
              </Link>
            </Button>
            </center>
        </div>
    )
}

export default LogOutContainer