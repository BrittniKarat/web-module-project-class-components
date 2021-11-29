import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    }
  }

      handleChange = (e) => {
          this.setState({
              ...this.state,
              task: e.target.value
          })
      }
  
      handleClick = (e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state.task);
      }
  

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="New Task"
        />
        <button onClick={this.handleClick}> Add Task </button>
        <button onClick={this.props.remove}>Remove completed</button>
      </form>
    );
  }
}

export default TodoForm;
