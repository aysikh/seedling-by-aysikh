import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export default function JournalForm() {

  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "absolute",
      left: "20%",
      height: "80vh",
      width: "120vh"
    },
    submit: {
      // marginLeft: '20rem',
      fontSize: '1.3rem',
      float: 'right',
      margin: '3px'
    },
    cancel: {
      // marginLeft: '30rem',
      fontSize: '1.3rem',
      float: 'right',
      margin: '3px'
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    },
    typography: {
      padding: theme.spacing(2)
    },
    popper: {
      minWidth: 550,
    }, 
    icon: {
      fontSize: "5.5rem"
    }
  }))

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return(
    <div className={classes.popper}>
    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Typography className={classes.typography}>
            <div>
              <Container component="main" maxWidth="s">
                <Paper elevation={3} className={classes.paper}>
                  <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" />
                    <br /> <br />
                    
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Your response"
                    multiline
                    rows={30}
                    variant="outlined"
                  />
                    <br/> <br/> 
                    <Button 
                      className={classes.cancel}
                      variant="contained" 
                      color="secondary" 
                      onClick={handleClick('right-start')}>
                      Close
                    </Button>
                    <Button 
                      className={classes.submit}
                      type="submit" 
                      variant="contained" 
                      color="primary">
                      Submit
                    </Button> 
                </Paper>
              </Container>
            </div>
            </Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
    <div>
      <br />
      <Grid 
        item container xs={10} 
        alignItems="flex-end" 
        direction="column" 
        style={{position: "absolute", maxWidth: '15%'}}>
        <Grid item>
          <Button onClick={handleClick('right-start')}><AddCircleIcon className={classes.icon}/></Button>
        </Grid>
      </Grid>
    </div>
  </div>
  );
}