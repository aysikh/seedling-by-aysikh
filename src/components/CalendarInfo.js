import React, { useEffect, useState } from 'react'

import Bear1 from '../assets/bear1.png'
import Bear2 from '../assets/bear2.png'
import Bear3 from '../assets/bear3.png'
import Bear4 from '../assets/bear4.png'
import Bear5 from '../assets/bear5.png'
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import EditDailyEntryForm from './EditDailyEntryForm'
import { NavLink, Redirect, Link } from 'react-router-dom'

const PROMPTS_URL = "http://localhost:3001/prompts"


const useStyles = makeStyles((theme) => ({
    image: {
      height: "16vh",
    },
    icon: {
        fontSize: 'small',
    }
  }));


const CalendarInfo = (props) => {

    const classes = useStyles();
    const [prompts, setPrompts] = useState("");
    const [view, setView] = useState(false);
    const [ID, setID] = useState({})
    const [randomPrompt, setRandomPrompt] = useState("")
    const [randomPromptID, setRandomPromptID]=useState("")

    const getPrompts = async () => {
        try {
          let userPrompts = await 
          axios.get(PROMPTS_URL)
        //   console.log(userPrompts.data)
          setPrompts(userPrompts.data); //set state
  
        } catch (err) {
          alert(err.message);
        }
      };
      
      useEffect(() =>{
          getPrompts()
      }, [])

      useEffect(()=>{
        if (prompts.length > 0){
          let randomIndex = Math.floor(Math.random() * prompts.length); 
          setRandomPrompt(prompts[randomIndex].statement);
          setRandomPromptID(randomIndex)
        }
      },[prompts])

    const entryID = () => {
        let dailyentry = props.parsedDateEntry()
        dailyentry = dailyentry.filter(entry => entry.date == props.selectedDate)[0]
        setID(dailyentry)
        return dailyentry
    }

    const entryContent = () => {
        let something = props.parsedDateEntry()
        // console.log(something)
        let x = something.filter(entry => entry.date === props.selectedDate)
        if (x[0]){
            return x[0].content
        }
        else {
            return randomPrompt
        }
    }

    const entryRating = () => {
        let something = props.parsedDateEntry()
        let y = something.filter(entry => entry.date === props.selectedDate)
        if (y[0] && y[0].rating === 1){
            return <img src={Bear5} className={classes.image}/>
        }
        if (y[0] && y[0].rating === 2){
            return <img src={Bear4} className={classes.image}/>
        }
        if (y[0] && y[0].rating === 3){
            return <img src={Bear3} className={classes.image}/>
        }
        if (y[0] && y[0].rating === 4){
            return <img src={Bear2} className={classes.image}/>
        }
        else if (y[0] && y[0].rating === 5) {
            return <img src={Bear1} className={classes.image}/>
        }
    }
    
    const entryPrompt = () => {
        let dailyentry = props.parsedDateEntry();
        let dateentry = dailyentry.filter(entry => entry.date == props.selectedDate)
        // let filteredPrompts = prompts.filter()
        for (let i = 0; i < prompts.length; i++){
            if (prompts[i].id == dateentry[0].prompt) {
                return prompts[i].statement
            }
            // else if dailyentry does not have a prompt then generate a random prompt
        }

    }

    const handleEdit = () => {
        setView(!view) 
    }

    const handleDelete = () => {
        let deleteID = entryID().id
        fetch(`http://localhost:3001/daily_entries/${deleteID}`, {
        method: 'DELETE',
    })
        .then(rsp => rsp.json())
        .then(window.location.reload())

    }

    return (
        <div>
            {view ? <EditDailyEntryForm setView={setView} findID={entryID}/> : null}
            <center>
                <Button> 
                    <EditOutlinedIcon onClick={handleEdit} />
                </Button> 
                <Button> 
                    <DeleteOutlinedIcon onClick={handleDelete}/>
                </Button>
            </center>
            <center>
             <h2>
                {props.selectedDate}
            </h2>
                <div>
                    {entryRating()}
                    <h4><b>today's prompt: </b></h4>
                    {entryPrompt()}
                    <h4><b>today's content: </b></h4> 
                    {entryContent()}
                </div>
            </center>
        </div>
    )
}

export default CalendarInfo