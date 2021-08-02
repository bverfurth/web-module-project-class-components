import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.toDoList.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            id={todo.id}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
