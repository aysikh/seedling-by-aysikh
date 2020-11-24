import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default function JournalForm() {
  return(
    <div>
      <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <form/>
        <div>
        <TextField
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