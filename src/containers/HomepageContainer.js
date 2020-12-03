import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles"
import Stats from "../components/Stats";
import Gif from "../assets/navbar.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(230),
      height: theme.spacing(100),
      overflow: "hidden",
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
      margin: 0,
    },
    paper: {
      height: 140,
      width: 100,
    },
    stepper: {
      height: "100px",
    },
  },
}));


export default function HomepageContainer() {
  const theme = useTheme();
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const currentTime = () => {
    let date = new Date();
    let hours = date.getHours();

    if (hours < 12) {
      return "Good morning!";
    } else if (hours < 18) {
      return "Good afternoon!";
    } else {
      return "Good evening!";
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={3}>
          <br />
          <Grid container justify="center" spacing={spacing}>
            <div>{currentTime()}</div>
            <br /> <br />
          </Grid>

          <Grid container spacing={24} style={{ padding: "10px" }}>
            {/* <Grid item xs={4}> */}
            {/* <img src={Quote2} /> */}
            {/* </Grid> */}
            <Grid item xs={7}>
              <Stats />
            </Grid>
            <Grid item xs={4}>
              <img
                src={Gif}
                style={{ marginLeft: "12rem", marginTop: "12rem" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
