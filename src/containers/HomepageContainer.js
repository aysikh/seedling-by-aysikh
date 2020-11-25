import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MoodForm from '../components/MoodForm'
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Quote1 from '../assets/quote1.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(90),
      height: theme.spacing(80),
      overflow: "hidden"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default function HomepageContainer() {
  function getSteps() {
    return ['Day 1', 'Day 2', 'Day 3'];
  }
  
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={3}>
        <div>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div>
          <img src={Quote1} style={{marginLeft: '15%'}}/> 
        </div>
        </Paper >
      </div>
    </div>
  )
}
