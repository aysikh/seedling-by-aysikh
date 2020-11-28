import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Calendar from '../components/Calendar'
import CalendarInfo from '../components/CalendarInfo'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

const DAILY_ENTRY_URL = "http://localhost:3001/daily_entries"

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px",
    borderRadius: "3px"
  },
}));

const CalendarContainer = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [dailyentries, setDailyEntries] = useState(null)
  
  const getDailyEntries = async () => {
    try {
      const userDailyEntries = await
      axios.get(DAILY_ENTRY_URL)
      console.log(userDailyEntries.data)
      setDailyEntries(userDailyEntries.data)
    } catch (err){
      alert(err.message)
    }
  }
  
  useEffect(()=>{
    getDailyEntries()
  },[])


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const parsedDateEntry = () => {
    let parsedDate = []
    let dates = []
    // let info = {}
    if (dailyentries){
        dailyentries.map(dailyentry => {
          let info = {}
          info.date = dailyentry.created_at
          info.rating = dailyentry.rating 
          info.prompt = dailyentry.prompt
          info.content = dailyentry.content
          dates.push(info)
        })
    }
    // console.log(dates)
    dates.map(date => {
        let x = date.date.split("-")
        let y = x[2].split("T")
        let z = y[0] 
        let parsed = [x[1], z, x[0]]
        date.date = parsed.join("-")
        // console.log(parsedDate)
        return date
      })
      return dates
}

  return (
    <div>
      <br />
      <div>
        <Calendar 
          currentDate={currentDate} 
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dailyentries={dailyentries}
          setDailyEntries={setDailyEntries}
          handleClick={handleClick}
          /> 
      </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Paper className={classes.card}>
        {selectedDate && (
          <div>
            <CalendarInfo 
              selectedDate={selectedDate.toString()}
              parsedDateEntry={parsedDateEntry}
            />
          </div>
        )}
          </Paper>
       </Popover>
    </div>
  )
} 

export default CalendarContainer