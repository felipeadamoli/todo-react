import React, { Component } from 'react';
import { Box } from 'gestalt';
import Todo from '../Todo/Todo';

export default (props) => {
        return (
            <Box color="white"> 
                {
                    props.tarefas.map((todo) => <Todo key={todo.id} handleChange={props.handleChange} tarefa={todo} />)
                }
            </ Box> 
        );
}