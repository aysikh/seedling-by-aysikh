import React, { useState } from "react";
import Bear1 from '../assets/bear1.png'
import Bear2 from '../assets/bear2.png'
import Bear3 from '../assets/bear3.png'
import Bear4 from '../assets/bear4.png'
import Bear5 from '../assets/bear5.png'

// const ratingImage = (rating) => {
//     switch (rating){
//         case "5": 
//             <img src={Bear1} /> 
//             break;
//         case "4": 
//             <img src={Bear2} /> 
//             break;
//         case "3":
//             <img src={Bear3} />
//             break;
//         case "2":
//             <img src={Bear4} />
//             break;
//         case "1":
//             <img src={Bear5} /> 
//             break;
//     }
// }

const CalendarInfo = (props) => {


    return (
        <div>
             <h2>
                {props.selectedDate}
            </h2>
        </div>
    )
}

export default CalendarInfo