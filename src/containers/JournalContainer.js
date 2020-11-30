import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import JournalForm from '../components/JournalForm'
import JournalShow from '../components/JournalShow'

const JournalContainer = () => {

    return(
        <div>
            <div>
                <Grid container spacing={24} style={{padding: '10px', marginLeft: '5rem'}}>
                    <Grid item xs={8} >
                        <JournalShow />
                    </Grid>

                
                    <Grid item xs={2} >
                        <JournalForm />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default JournalContainer