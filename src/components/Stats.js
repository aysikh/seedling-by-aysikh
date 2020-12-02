import React from 'react';
import { Bar, Line} from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Bear1 from '../assets/bear5.png'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40rem',
    width: '65rem',
    marginLeft: '3rem'
  },
}))




const Stats = () => {
  const classes = useStyles()

  let start = new Date();
//   let end = new Date();

start = start.setDate(start.getDate() - 7); // set to 'now' minus 7 days.
// start.setHours(0, 0, 0, 0); // set to midnight.

  let timeFormat = 'MM-dd-yyyy'

  const newDate = (days) => {
    // for (let i=1; i <= 7; i++){
    //   return newDate[i] = moment().subtract(i, 'days').format("DD MM YYYY")
    // }
    let x = moment().subtract(days, 'd').toDate();
    console.log(x)
    return x
  }
  const newDateString = (days) => {
    let y = moment().add(days, 'd').format(timeFormat);
    console.log(y)
    return y
}


  return(

    <div>
      <Paper className={classes.root}>
        {/* {newDate()} */}
        <Line 
        data = {{
          // labels: [
          //   newDate(0),
          //   newDate(1),
          //   newDate(2),
          //   newDate(3),
          //   newDate(4),
          //   newDate(5),
          //   newDate(6)
          // ],
          labels: ['11/30', '11/31', '12/01', '12/02', '12/03', '12/05'], 
          datasets: [
            {
              label: 'your mood rating', 
              data: [3, 5, 4, 1, 2, 1, 5],
              lineTension: 0,
              borderColor : "#90caf9",
              borderWidth : "3",
              hoverBorderColor : "#000",
              backgroundColor: [
                '#bbdefb'
              ]
            },
          ],

        }
      }

        style={{overflow: 'hidden'}}
        maxheight = {400}
        maxwidth = {600}
        options = {{
          maintainAspectRatio: false,
          bezierCurve: false,
          layout: {
            padding: {
              bottom: 30,
              left: 60,
              right: 90,
              top: 10
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  steps: 5,
                  stepSize: 1,
                  
                },
              },
            ],
          },
        }}
        /> 
      </Paper>
    </div>
  )
}

export default Stats