import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogInForm from '../components/LogInForm'
import useWindowPosition from '../hook/useWindowPosition';
import NewUserForm from '../components/NewUserForm'
import Grid from '@material-ui/core/Grid';
import InfoImage from '../components/InfoImage'
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { CssBaseline } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'red',
      overflowX: 'hidden',
      marginLeft: 'auto',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    //   container: {
    //     textAlign: 'center',
    //     alignItems: 'center',
    // },
    },
  }));

  export default function () {
    const classes = useStyles();
    const checked = useWindowPosition('homepage');

    return (
      <div className={classes.root} id="info-image">
        <Collapse
        in={checked}
          {...(checked ? {timeout: 1000} : {})}
          collapsedHeight={50}
          >
          <div>
            <Scroll to="sign-up-form" smooth={true}>
              <center>
                <InfoImage checked={checked}/>
                  <IconButton>
                    <KeyboardArrowDownIcon style={{fontSize: '6rem', color: '#004d40'}} />
                  </IconButton>
              </center>
            </Scroll>
          </div>
        </Collapse>
      </div>
    );
  }