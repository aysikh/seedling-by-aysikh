import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { NavLink, Redirect, Link } from 'react-router-dom'
import SortIcon from '@material-ui/icons/Sort';
import Image from '../assets/navbar2.gif'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    // overflowY: 'hidden',
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  text: {
    color: "black",
    lineHeight: '3',
    letterSpacing: '0.47em',
    textDecoration: 'none',
    textAlign: 'right'
  },
  link: {
    textDecoration: 'none',
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [view, setView]=useState(false);
  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

 

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {<Link to="/home" className={classes.link}>
            <ListItem button key={"Homepage"} className={classes.text}>

            <ListItemText primary={"Homepage"} style={{height: '2.5rem'}} />
            </ListItem>
          </Link>}
          {<Link to="/dailyentry" className={classes.link}>
            <ListItem button key={"Add Daily Entry"} className={classes.text}>

            <ListItemText primary={"Add Daily Entry"} style={{height: '2.5rem'}}/>
            </ListItem>
          </Link>}
          {<Link to="/blogpost" className={classes.link}>
            <ListItem button key={"Blog Posts"} className={classes.text}>

            <ListItemText primary={"Blog Posts"} style={{height: '2.5rem'}}/>
            </ListItem>
            </Link>}
          {<Link to="/calendar" className={classes.link}>
            <ListItem button key={"Calendar"} className={classes.text}>

            <ListItemText primary={"Calendar"} style={{height: '2.5rem'}}/>
            </ListItem>
          </Link>}
        </List>
        <Divider />
        {<NavLink to="/logout" className={classes.link}>
          <ListItem button key={"Sign Out"} className={classes.text}>
            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
            <ListItemText primary={"Sign Out"} style={{height: '2.5rem'}}/>
          </ListItem>
        </NavLink>}
        <div>
          <center>
            <img src={Image} style={{height: '15.5rem', position: 'relative', marginBottom: '-43rem', paddingBottom: '-250px'}}/>
          </center>
        </div>
    </div>
  );
          
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton style={{marginLeft: '100rem', marginTop: '2rem', color: '#006064'}}>
            <SortIcon 
            onClick={toggleDrawer(anchor, true)}
            style={{fontSize: '3rem'}}
            >
              {anchor}
            </SortIcon>
            </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
