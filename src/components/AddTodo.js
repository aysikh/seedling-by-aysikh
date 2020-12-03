import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {IconButton} from '@material-ui/core'

const AddTodo = memo(props => (
  <Paper style={{ margin: 16, padding: 35 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 10 , marginTop: 5}}>
        <TextField
          placeholder="What I need to do today..."
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <IconButton
          fullWidth
          color="primary"
          variant="outlined"
          onClick={props.onButtonClick}
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Paper>
));

export default AddTodo;
