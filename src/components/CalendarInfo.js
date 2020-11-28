import React, { useState } from "react";

import Bear1 from '../assets/bear1.png'
import Bear2 from '../assets/bear2.png'
import Bear3 from '../assets/bear3.png'
import Bear4 from '../assets/bear4.png'
import Bear5 from '../assets/bear5.png'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
      height: "20vh",
    },
  }));

const CalendarInfo = (props) => {
  const classes = useStyles();
    const entryContent = () => {
        let something = props.parsedDateEntry()
        let x = something.filter(entry => entry.date == props.selectedDate)
        if (x[0]){
            return x[0].content
        }
    }

    const entryRating = () => {
        let something = props.parsedDateEntry()
        let y = something.filter(entry => entry.date == props.selectedDate)
        if (y[0] && y[0].rating == 1){
            return <img src={Bear5} className={classes.image}/>
        }
        if (y[0] && y[0].rating == 2){
            return <img src={Bear4} className={classes.image}/>
        }
        if (y[0] && y[0].rating == 3){
            return <img src={Bear3} className={classes.image}/>
        }
        if (y[0] && y[0].rating == 4){
            return <img src={Bear2} className={classes.image}/>
        }
        else if (y[0] && y[0].rating == 5) {
            return <img src={Bear1} className={classes.image}/>
        }
    }

    const entryPrompt = () => {
        let something = props.parsedDateEntry()
        let z = something.filter(entry => entry.date == props.selectedDate)
        if (z[0]){
            return z[0].prompt
        }
    }

    return (
        <div>
             <h2>
                {props.selectedDate}
                <br /> 
                <div>
                    {entryRating()}
                    <br /> 
                    prompt: 
                    {entryPrompt()}
                    <br />
                    content: 
                    {entryContent()}
                    <br /> 

                </div>
            </h2>
        </div>
    )
}

export default CalendarInfo