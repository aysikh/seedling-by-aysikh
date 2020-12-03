import React, { memo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'


import { useInputValue, useTodos } from "../components/CustomHooks";
import AddTodo from "../components/AddTodo";
import Todo from "../components/ToDo";

const useStyles = makeStyles(() => ({
    root: {
        height: '40rem',
        width: '30rem', 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10rem',
        marginTop: '-1rem'
    },
}))

const TodoContainer = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const classes = useStyles()

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };


  return (
    <Paper className={classes.root}>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <Todo
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Paper>
  );
});

export default TodoContainer