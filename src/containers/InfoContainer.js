import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import NewUserForm from '../components/NewUserForm'
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { CssBaseline } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // overflowX: 'hidden',
      marginLeft: 'auto',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
  }));
  export default function InfoContainer(props) {
    const classes = useStyles();
    const checked = useWindowPosition('homepage');

    return (
      <div className={classes.root} id="sign-up-form">

        <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
            >
            <div className={classes.container}>
                <NewUserForm checked={checked} /> 
            <Scroll to="homepage" smooth={true}>
                <center>
                    <IconButton>
                    <KeyboardArrowUpIcon style={{fontSize: '4rem', color: 'green'}} />
                    </IconButton>
                </center>
            </Scroll>
            </div>
        </Collapse>
    
      </div>
    );
  }