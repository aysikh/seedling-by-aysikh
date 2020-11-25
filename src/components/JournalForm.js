import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


export default function JournalForm() {

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "absolute",
      left: "20%",
      height: "85vh",
      width: "120vh"
    },
    textField: {
      height: "150%",
      width: "100%"
    }, 
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    },
  }))

  const classes = useStyles();

  return(
    <div>
      <br />
      <Container component="main" maxWidth="s">
      <Paper elevation={3} className={classes.paper}>
      <TextField id="outlined-basic" label="Title" variant="outlined" />
        <br />
        <br />
        <div>
        <TextField
          className={classes.textField}
          id="outlined-multiline-static"
          label="Your response"
          multiline
          rows={30}
          variant="outlined"
        />
      </div>
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Paper>
      </Container>
    </div>
  )
}