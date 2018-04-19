import React, { Component } from 'react';
import {Box, TextArea, Button} from 'gestalt';
 
class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            tarefa: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({value}) {
        this.setState({tarefa: value});
    }

    handleSubmit() {
        this.props.adicionaTarefa(this.state.tarefa);
        this.setState({tarefa: ""});
    }

    render() {
        return (
            <Box color="white">    
                <Box padding={2}>
                    <TextArea
                        id="aboutme"
                        onChange={this.handleChange}
                        placeholder="Write something about yourself..."
                        value={this.state.tarefa}
                    />
                </Box>
                <Box padding={2} display="flex" justifyContent="end">
                    <Button size="sm" text="adicionar tarefa" onClick={this.handleSubmit} inline/>
                </Box>
            </Box>
        );
    }
}

export default TodoForm;