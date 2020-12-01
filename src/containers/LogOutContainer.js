import React, { Component } from 'react'
import ForYou from '../assets/michelle1.png'
import { makeStyles } from '@material-ui/core/styles';


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
            </center>
        </div>
    )
}

export default LogOutContainer