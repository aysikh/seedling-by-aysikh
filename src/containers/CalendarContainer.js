import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Calendar from '../components/Calendar'
import CalendarInfo from '../components/CalendarInfo'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
// import BG from '../assets/bg.jpg'

const DAILY_ENTRY_URL = "http://localhost:3001/daily_entries"

const useStyles = makeStyles( ( theme ) => ( {
    card: {
        padding: "20px",
        borderRadius: "3px"
    },
} ) );

const CalendarContainer = () => {
    const classes = useStyles();
    const [ anchorEl, setAnchorEl ] = React.useState( null );

    // the date before being parsed
    const [ currentDate, setCurrentDate ] = useState( new Date() );

    //the date being selected in (mm-dd-yyyy) format
    const [ selectedDate, setSelectedDate ] = useState( null );

    // the array of dailyentries
    const [ dailyentries, setDailyEntries ] = useState( null );

    // the id of the selected dailyentry if exists on that day
    const [ currentID, setCurrentID ] = useState( {} );

    // let newCurrentDate = currentDate.toISOString().substring(0, 10)
    // console.log(newCurrentDate)
    // console.log(selectedDate)

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


    const handleClick = ( event ) => {
        event.preventDefault();
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () => {
        setAnchorEl( null );
    };

    const open = Boolean( anchorEl );
    const id = open ? 'simple-popover' : undefined;

    const parsedDateEntry = () => {
        let parsedDate = []
        let dates = []
        if ( dailyentries ) {
            dailyentries.map( dailyentry => {
                console.log( dailyentry )
                let info = {}
                info.id = dailyentry.id
                info.date = dailyentry.date
                info.rating = dailyentry.rating
                info.prompt = dailyentry.prompt_id
                info.content = dailyentry.content
                dates.push( info )
            } )
        }
        // console.log(dates)
        dates.map( date => {
            let x = date.date.split( "-" )
            let y = x[ 2 ].split( "T" )
            let z = y[ 0 ]
            let parsed = [ x[ 1 ], z, x[ 0 ] ]
            date.date = parsed.join( "-" )
            // console.log(parsedDate)
            return date
        } )
        return dates
    }

    console.log( dailyentries )
// if there the dailyentry date matches with a day on the calendar,
// it should return an image
// I know dailyentry's date = 
// I need to map through the array of parsedDateentries and match it up with the dates on the calendar


    return (
        <div>
            <br/>
            <div>
                <Calendar
                    currentDate={ currentDate }
                    setCurrentDate={ setCurrentDate }
                    selectedDate={ selectedDate }
                    setSelectedDate={ setSelectedDate }
                    dailyentries={ dailyentries }
                    setDailyEntries={ setDailyEntries }
                    handleClick={ handleClick }
                    parsedDateEntry={ parsedDateEntry }
                />
            </div>
            <Popover
                id={ id }
                open={ open }
                anchorEl={ anchorEl }
                onClose={ handleClose }
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'center',
                } }
                transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'center',
                } }
            >
                <Paper className={ classes.card }>
                    { selectedDate && (
                        <div>
                            <CalendarInfo
                                setCurrentID={ setCurrentID }
                                selectedDate={ selectedDate.toString() }
                                parsedDateEntry={ parsedDateEntry }
                                setDailyEntries={ setDailyEntries }
                                dailyentries={ dailyentries }
                            />
                        </div>
                    ) }
                </Paper>
            </Popover>
        </div>
    )
}

export default CalendarContainer