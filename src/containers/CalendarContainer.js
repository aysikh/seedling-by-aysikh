import React, { useState } from "react";
import Calendar from '../components/Calendar'
import CalendarInfo from '../components/CalendarInfo'

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate)

  return (
    <div>
      <div>
      <Calendar 
        currentDate={currentDate} 
        setCurrentDate={setCurrentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      /> 
      </div>
      {selectedDate && (
        <div>
          <CalendarInfo 
            selectedDate={selectedDate.toString()}
          />
        </div>
      )}
    </div>
  )
} 

export default CalendarContainer