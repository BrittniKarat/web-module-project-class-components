import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

 // you will need a place to store your state in this component.
 // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    }
  }

  handleSubmit = (item) => {
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item =>{  
        return (!item.completed);
      })
    })
  }

  handleRemoveComplete = (task) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map( item =>(
         item.id === task.id ? {...item, completed: !item.completed} : item
         ))
    })
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <TodoForm  tasks={this.state.tasks.task}  handleSubmit={this.handleSubmit} remove={this.handleRemoveComplete}/>
        <TodoList task={this.state.tasks} toggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;