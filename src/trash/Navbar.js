import React, { Component } from 'react'
import { NavLink, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
// import { Route, Switch, Redirect, Link } from 'react-router-dom';
// import LogInContainer from './LogInContainer'
// import NewUserContainer from './NewUserContainer'
// import HomepageContainer from '../containers/HomepageContainer'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SchoolIcon from '@material-ui/icons/School';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Logo2 from '../assets/logo5.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#545454"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  text: {
    color: "white",
    fontSize: '3rem',
    fontWeight: '550',
    lineHeight: '3',
    letterSpacing: '0.37em',
    textDecoration: 'none'
  },
  icon: {
    color: "#0D791E"
  }
}));

export default function Navbar(props) {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
}


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
  
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo2} style={{height: "70px"}} /> 
          {/* <Typography variant="h6" noWrap>
            Seedling
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
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
        {props.loggedInStatus ? <NavLink to="/login" onClick={handleClick} /> : null}
          <ListItem button key={"Sign Out"} className={classes.text}>
            <ListItemIcon className={classes.icon}> <ExitToAppIcon /> </ListItemIcon>
            <ListItemText primary={"Sign Out"} />
          </ListItem>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <div>
          {/* <h1>I am the navbar</h1> */}

        </div>

      </main>
    </div>
  );
}

