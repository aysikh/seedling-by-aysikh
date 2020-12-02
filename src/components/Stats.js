import React from 'react';
import { Bar, Line} from 'react-chartjs-2'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Bear1 from '../assets/bear5.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40rem',
    width: '65rem',
    marginLeft: '10rem'
  },
}))


const Stats = () => {
  const classes = useStyles()

  return(

    <div>
      <Paper className={classes.root}>
        <Line 
        data = {{
          labels: ['11/30', '11/31', '12/01', '12/02', '12/03', '12/05'], 
          datasets: [
            {
              label: 'mood', 
              data: [3, 5, 4, 1, 2,1],
              lineTension: 0
            }
          ],
        }}
        style={{overflow: 'hidden'}}
        maxheight = {400}
        maxwidth = {600}
        options = {{
          maintainAspectRatio: false,
          bezierCurve: false,
          layout: {
            padding: {
              bottom: 30,
              left: 90,
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
                  // labels: [('../assets/bear5.png')]
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