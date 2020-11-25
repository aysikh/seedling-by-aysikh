import React, { useState } from "react";

const CalendarInfo = (props) => {
    return (
        <div>
             <p>
                {props.selectedDate}
            </p>
        </div>
    )
}

export default CalendarInfo