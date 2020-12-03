import React, { useState, useEffect } from 'react'
import WebInfo from '../assets/webinfogreen1.png'
import Grid from '@material-ui/core/Grid';

export default function InfoImage(){
    return (
        <div>
            <Grid item xs={6} >
                <img src={WebInfo} style={{height: '36rem', marginRight: '50rem', marginTop: '5rem'}}/>
            </Grid>
        </div>
    )

}