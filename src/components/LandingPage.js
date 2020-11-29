import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from '../assets/logo3.png'
import Navbar2 from './Navbar2'
import LogInContainer from '../containers/LogInContainer'
import NewUserForm from './NewUserForm'
import HomepageContainer from '../containers/HomepageContainer'
import CalendarContainer from '../containers/CalendarContainer'
import JournalForm from './JournalForm'
import Main from './Main'
import DailyEntryForm from './DailyEntryForm'
import BG from '../assets/bg.jpg'

    const useStyles = makeStyles((theme) => ({
        // bg: {
        //     minHeight: '100vh',
        //     backgroundImage: `url(${BG})`,
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        //   },
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        },
        appbar: {
            background: 'none',
        },
        appbarWrapper: {
            width: '80%',
            margin: '0 auto',
        },
        appbarTitle: {
            flexGrow: '1',
        },
        icon: {
            color: 'black',
            fontSize: '2rem',
        },
        colorText: {
            color: '#1a904b',
        },
        container: {
            textAlign: 'center',
        },
        title: {
            color: 'black',
            fontSize: '4.5rem',
        },
        goDown: {
            color: '#1a904b',
            fontSize: '4rem',
        },
        }));

    export default function Header() {
        const classes = useStyles();
        const [checked, setChecked] = useState(false);
        useEffect(() => {
            setChecked(true);
        }, []);


    return (
        <div>
            <Switch>
                <Route path="/logout" component={LogInContainer} />
                <Route exact path="/user/newuser" component={NewUserForm} />
                <Route exact path ="/user/home" component={HomepageContainer} />
                <Route exact path="/user/calendar" component={CalendarContainer} />
                <Route exact path="/user/journal" component={JournalForm} />
                <Route exact path="/user/stats" component={Main} />
                <Route exact path ="/user/dailyentry" component={DailyEntryForm} />
            </Switch>
            <div className={classes.root} id="homepage">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <img src={Logo} /> 
                    </h1>
                    <Navbar2 />
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
                >
                <div className={classes.container}>
                <h1 className={classes.title}>
                    let yourself  <br />
                    <span className={classes.colorText}>grow</span>
                </h1>
                <h3>join the growth. </h3>
                <Scroll to="log-in-form" smooth={true}>
                    <IconButton>
                    <KeyboardArrowDownIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
                </div>
            </Collapse>
            </div>
        </div>
    );
    }

