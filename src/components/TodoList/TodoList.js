import React, { Component } from 'react';
import { Box } from 'gestalt';
import Todo from '../Todo/Todo';

class TodoList extends Component {
    render() {
        return (
            <Box color="white"> 
                {
                    this.props.tarefas.map((todo) => <Todo key={todo.id} handleChange={this.props.handleChange} tarefa={todo} />)
                }
            </ Box> 
        );
    }
}

export default TodoList;