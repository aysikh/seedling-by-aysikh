import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Quote1 from '../assets/quote1.gif'
import Quote2 from '../assets/quote2.gif'

import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(230),
      height: theme.spacing(100),
      overflow: "hidden"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    root: {
      display: "flex",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      margin: 0
    },
    paper: {
      height: 140,
      width: 100,
    },
    stepper: {
      height: '100px'
    }
  },
}));

  const createData = (date, rating) => {
    return { date, rating };
  }

  const data = [
    createData('11/05', 2),
    createData('11/06', 1),
    createData('11/07', 4),
    createData('11/08', 2),
    createData('11/09', 1),
    createData('11/11', 2),
    createData('11/12', 5)
  ];


export default function HomepageContainer() {

  const theme = useTheme();
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const getSteps = () => {
    return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
  }
  const steps = getSteps();
  


  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={3}>
        <div>
          <br />
          <label style={{color: 'green', fontSize: '25px', margin: '10rem'}}> your streak </label>
          <Stepper activeStep={activeStep} >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps} >
                  <StepLabel {...labelProps}>{label} </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
          <br />
            <Grid container justify="center" spacing={spacing} >
              <div> 
                <h1> Welcome to your homepage </h1> 
              </div>
            </Grid>

            <Grid container spacing={24} style={{padding: '10px'}}>
              <Grid item xs={4}>
                <img src={Quote1} style={{marginLeft: '30px'}}/>
              </Grid>
              {/* <Grid item xs={4}> */}
                {/* <img src={Quote2} /> */}
              {/* </Grid> */}
              <Grid item xs={7}>
              <React.Fragment>
                <ResponsiveContainer>
                  <LineChart
                    data={data}
                    margin={{
                      top: 16,
                      right: 16,
                      bottom: 0,
                      left: 24,
                    }}
                  >
                    <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
                    <Label
                      angle ={200}
                      position="middle"
                      style={{ textAnchor: 'middle', fill: theme.palette.text.primary}}
                      >
                        DATE
                      </Label>
                    <YAxis stroke={theme.palette.text.secondary}>
                      <Label
                        angle={270}
                        position="left"
                        style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                      >
                        MOOD
                      </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="rating" stroke={theme.palette.primary.main} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </React.Fragment>
              </Grid>
            </Grid>
        </Paper>
      </div>
    </div>
  )
}
