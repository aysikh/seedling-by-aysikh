import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as dateFns from "date-fns";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Quote1 from '../assets/quote1.gif'
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

import Stats from '../components/Stats'
import ToDoContainer from '../containers/TodoContainer'
import Gif from '../assets/navbar.gif'
import Egg from '../assets/egg.gif'
import Cloudy from '../assets/cloudy.gif'

const DAILY_ENTRY_URL = "http://localhost:3001/daily_entries"

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing( 5 ),
            width: theme.spacing( 230 ),
            height: theme.spacing( 100 ),
            overflow: "hidden"
        },
        instructions: {
            marginTop: theme.spacing( 1 ),
            marginBottom: theme.spacing( 1 ),
        },
        root: {
            display: "flex",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            margin: 0
        },
        paper: {
            height: 140,
            width: 100,
        },
        stepper: {
            height: '100px'
        }
    },
} ) );

export default function HomepageContainer() {

    const theme = useTheme();
    const [ spacing, setSpacing ] = React.useState( 2 );
    const classes = useStyles();
    const [ dailyentries, setDailyEntries ] = useState( null );

    const getDailyEntries = async () => {
        try {
            const userDailyEntries = await
                axios.get( DAILY_ENTRY_URL )
            // console.log(userDailyEntries.data)
            setDailyEntries( userDailyEntries.data )
        } catch ( err ) {
            alert( err.message )
        }
    }

    useEffect( () => {
        getDailyEntries()
    }, [] )

    const currentGreeting = () => {
        let date = new Date();
        let hours = date.getHours();

        if ( hours < 12 ) {
            return "Good morning!"
        }
        else if ( hours < 18 ) {
            return "Good afternoon!"
        }
        else {
            return "Good evening!"
        }
    }

    return (
        <div>
            <div className={ classes.root }>
                <Paper elevation={ 3 }>
                    <br/>
                    <Grid container justify="center" spacing={ spacing }>
                        <div>
                           <h1>  { currentGreeting() }  <img src={Cloudy} style={{height: '3.5rem'}}/>  </h1>
                        </div>
                        <br/> <br/>
                    </Grid>

                    <Grid container spacing={ 24 } style={ { padding: '10px' } }>
                        {/* <Grid item xs={4}> */ }
                        {/* <img src={Quote2} /> */ }
                        {/* </Grid> */ }
                        <Grid item xs={ 7 }>
                            <Stats
                                dailyEntries={ dailyentries }
                            />
                        </Grid>
                        <Grid item xs={ 4 }>
                            {/* <img src={ Gif } style={ { marginLeft: '12rem', marginTop: '12rem' } }/> */}
                            <ToDoContainer />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}
