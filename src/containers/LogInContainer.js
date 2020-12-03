import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import LogInForm from '../components/LogInForm'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden'
  },
}));

export default function LogInContainer() {
  const classes = useStyles();

  return (
    <div>
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
            <LogInForm /> 
        </Grid>
    </div>
  );
}