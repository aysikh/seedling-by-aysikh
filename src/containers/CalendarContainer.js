import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Calendar from '../components/Calendar'
import CalendarInfo from '../components/CalendarInfo'
import axios from 'axios'

const DAILY_ENTRY_URL = "http://localhost:3001/daily_entries"

const CalendarContainer = () => {

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


  const parsedDateEntry = () => {
    let parsedDate = []
    let dates = []
    // let info = {}
    if (dailyentries){
        dailyentries.map(dailyentry => {
          let info = {}
          info.date = dailyentry.created_at
          info.rating = dailyentry.rating 
          // info.prompt = dailyentry.prompt 
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
        /> 
      </div>
      {selectedDate && (
        <div>
          <CalendarInfo 
            selectedDate={selectedDate.toString()}
            parsedDateEntry={parsedDateEntry}
            //  selectedDailyEntry={dailyentries.filter(dailyentry => {
              //  let newDate = new Date(dailyentry.created_at).toDateString()
              //  return dailyentry.created_at == selectedDate
            //  })}
          />
        </div>
      )}
    </div>
  )
} 

export default CalendarContainer