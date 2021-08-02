import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div
        onChange={onChange}
        className={`todo${props.todo.toggleCompleted ? " completed" : ""}`}
      >
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
}

export default Todo;
