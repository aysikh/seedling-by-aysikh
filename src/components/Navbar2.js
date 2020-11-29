import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SchoolIcon from '@material-ui/icons/School';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { NavLink, Redirect, Link } from 'react-router-dom'
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
    fontSize: '3rem',
    fontWeight: '550',
    lineHeight: '3',
    letterSpacing: '0.47em',
    textDecoration: 'none'
  },
  icon: {
    color: "#0D791E"
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
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
          {<Link to="/user/home">
            <ListItem button key={"Homepage"} className={classes.text}>
            <ListItemIcon className={classes.icon} > <HomeIcon /> </ListItemIcon>
            <ListItemText primary={"Homepage"} />
            </ListItem>
          </Link>}
          {<Link to="/user/dailyentry">
            <ListItem button key={"Add Daily Entry"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <InsertEmoticonIcon /> </ListItemIcon>
            <ListItemText primary={"Add Daily Entry"} />
            </ListItem>
          </Link>}
          {<Link to="/user/journal">
            <ListItem button key={"Journal Entries"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <MenuBookIcon /> </ListItemIcon>
            <ListItemText primary={"Journal Entries"} />
            </ListItem>
            </Link>}
          {<Link to="/user/calendar">
            <ListItem button key={"Calendar"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <CalendarTodayIcon /> </ListItemIcon>
            <ListItemText primary={"Calendar"} />
          </ListItem>
          </Link>}
          {<Link to="/user/stats">
            <ListItem button key={"Stats"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <EqualizerIcon /> </ListItemIcon>
            <ListItemText primary={"Stats"} />
          </ListItem>
          </Link>}
          {<ListItem button key={"Learn"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <SchoolIcon /> </ListItemIcon>
            <ListItemText primary={"Learn"} />
          </ListItem>}
        </List>
        <Divider />
        // {<NavLink to="/login">
          <ListItem button key={"Sign Out"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <ExitToAppIcon /> </ListItemIcon>
            <ListItemText primary={"Sign Out"} />
          </ListItem>
          // </NavLink>}
    </div>
  );
          
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton><SortIcon onClick={toggleDrawer(anchor, true)}>{anchor}</SortIcon></IconButton>
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
