import React, { Component } from 'react'
import { NavLink, Redirect, Link } from 'react-router-dom'
// import { Route, Switch, Redirect, Link } from 'react-router-dom';

import LogInContainer from './LogInContainer'
import NewUserContainer from './NewUserContainer'

import HomepageContainer from './HomepageContainer'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
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
}));

export default function MainContainer() {
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
          <Typography variant="h6" noWrap>
            Seedling
          </Typography>
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
          {<NavLink to="/home">
            <ListItem button key={"Homepage"}>
            <ListItemIcon> <HomeIcon /> </ListItemIcon>
            <ListItemText primary ={"Homepage"} />
            </ListItem>
          </NavLink>}
          {<Link to="/newuser"><ListItem button key={"Journal Entries"}>
            <ListItemIcon> <MenuBookIcon /> </ListItemIcon>
            <ListItemText primary ={"Journal Entries"} />
            </ListItem>
            </Link>}
          {<ListItem button key={"Calendar"}>
            <ListItemIcon> <CalendarTodayIcon /> </ListItemIcon>
            <ListItemText primary ={"Calendar"} />
          </ListItem>}
          {<ListItem button key={"Stats"}>
            <ListItemIcon> <EqualizerIcon /> </ListItemIcon>
            <ListItemText primary ={"Stats"} />
          </ListItem>}
          {<ListItem button key={"Learn"}>
            <ListItemIcon> <SchoolIcon /> </ListItemIcon>
            <ListItemText primary ={"Learn"} />
          </ListItem>}
        </List>
        <Divider />
        {<NavLink to="/login"><ListItem button key={"Sign Out"}>
            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
            <ListItemText primary ={"Sign Out"} />
          </ListItem>
          </NavLink>}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <div>
          {/* <h1>I am the main container</h1> */}

          <HomepageContainer />
        </div>

      </main>
    </div>
  );
}

