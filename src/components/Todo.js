import React from "react";


class Todo extends React.Component {
    handleClick = () => {
        this.props.handleRemoveComplete(props.task);
    }
    
    render(){
        return(
            <div onClick={this.handleClick}>
                <p>{this.props.task}</p>
            </div> 
        )
    }

}

export default Todo;
