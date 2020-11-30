import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 100,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(MuiAccordionDetails);

const JournalShow = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        < br/> < br/> 
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Daily Stoic Day 6 Challenge: 10 Commandments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                <div>
                    The author Ryan Holiday created a program (for about 30 days) where you do one challenge each day built around Stoic philosophy that helps towards your self-development. He does these challenges often and participating in the challenge a few months ago, I wanted to share my Day 6 of that challenge.
                </div><br/>
                <div>
                    Today, your job is to create your own personal Ten Commandments. What principles do you live by? What principles do you want to live by? This is the day you muster the courage to define your rules, to articulate them, and to hold yourself to them. Write down your personal Ten Commandments that describe the person you wish to be.
                </div><br/>
                <div>
                    1. Everyone is fluid, it is unfair to box people in based on fixed opinions including my own self. 
                    <br/>
                    2. Defining my own self or others is a cop-out mentality. 
                    <br/>
                    3. Always come from a place of love through my thoughts, words, and actions. Detach from anything that feeds the ego and creates space between others
                    <br/>
                    4. Nobody owes you anything, it’s better to give and do things without the expectation of something in return. 
                    <br/>
                    5. The only control I have in this world is of myself, the way I choose to talk to myself, feed my thoughts and body as well as how I choose to respond or react to the external events.
                    <br/> 
                    6. The outer world we experience is a reflection of our own inner world. When we treat ourselves nicely, the world seems kinder. 
                    <br/>
                    7. How you do anything is how you do everything. Each decision contributes towards the life I choose to live.
                    Be honest with yourself and others and act in accordance with my own personal moral values. 
                    <br/>
                    8. As Socrates once said “I know I know nothing.” I believe that we should never lose our inner child. We should always be exploring and asking questions. We are all students of life.
                    <br/>
                    9. Where your attention goes, energy flows. The power of attention grows where ever you put it, so it’s important to put it on the things that matter. 
                    <br/>
                    10. The only thing that is certain in life is that life is uncertain. I choose to detach myself from expectations and to enjoy each moment of the process/ journey.
                    <br/>
                </div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default JournalShow