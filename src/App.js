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

  handleToggle = (task) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map( item =>{
        if ( item.id = task.id){
          return {...item, completed: !item.completed}
        } else {
          return item;
        }
      })
    })
    }

  handleRemoveComplete = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item =>{  
        return (!item.completed);
      })
    })
  }

  
  render() {
    return (
      <div>
        <h1>Task List</h1>
        <TodoForm  tasks={this.state.tasks.task}  handleSubmit={this.handleSubmit}/>
        <TodoList task={this.state.tasks} toggle={this.handleToggle}/>
        <button onClick={this.handleRemoveComplete}>Remove completed</button>
      </div>
    );
  }
}

export default App;