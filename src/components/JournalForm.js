import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


export default function JournalForm() {

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "fixed",
      top: "20%",
      height: "80vh",
      width: "100vh"
    },
    textField: {
      height: "150%",
      width: "90%"
    }
  }))

  const classes = useStyles();

  return(
    <div>
      <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <form/>
        <div>
        <TextField
          className={classes.textField}
          id="outlined-multiline-static"
          label="Your response"
          multiline
          rows={10}
          variant="outlined"
        />
      </div>
      </Paper>
      </Container>
    </div>
  )
}