import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { Box, Container } from 'gestalt';
import shortId from 'shortid';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tarefas: [
        {
          id: shortId.generate(),
          tarefa: "aaaaaa",
          completo: false
        }
      ]
    }
    this.adicionaTarefa = this.adicionaTarefa.bind(this);
    this.atualizaTarefa = this.atualizaTarefa.bind(this);
  }

  adicionaTarefa(valor) {
    if(valor) {
      this.setState({
        tarefas: [...this.state.tarefas, {id: shortId.generate(), tarefa: valor, completo: false}]
      })
    }
  }

  atualizaTarefa(tarefa) {
    let novasTarefas = [...this.state.tarefas];
    novasTarefas.map((el) => el.id === tarefa.id ? el.completo = !el.completo : el);
    this.setState({tarefas: novasTarefas});
  }

  render() {
    return (
      <Box color="gray" padding={3} height="100%">
        <Container>
          <Box color="white" padding={3}>
            <TodoForm
              adicionaTarefa={this.adicionaTarefa}
              tarefa={this.state.tarefa}
              handleChange={this.handleChange}
            />
            <TodoList tarefas={this.state.tarefas} handleChange={this.atualizaTarefa} />
          </Box>
        </Container>
      </Box>
    );
  }
}

export default App;