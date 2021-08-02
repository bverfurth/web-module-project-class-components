import React from "react";

class Todo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        onClick={() => this.props.toggleCompleted(this.props.id)}
        className={`todo${this.props.todo.completed ? " completed" : ""}`}
      >
        <p>{this.props.todo.item}</p>
      </div>
    );
  }
}

export default Todo;
