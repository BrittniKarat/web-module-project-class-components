import React from "react";
import Todo from './Todo';

class TodoList extends React.Component {
    
    render() {
        return(
            <div>
             {this.props.task.map(item => (
                 <Todo key={item.id} task={item.task} toggle={this.props.toggle}/>
             ))}    
            </div>
        )
    }
}

export default TodoList;