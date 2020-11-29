import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogInForm from '../components/LogInForm'
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '75vh',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
  }));
  export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('homepage');

    return (
      <div className={classes.root} id="log-in-form">
        <LogInForm checked={checked} /> 
      </div>
    );
  }