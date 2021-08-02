import React from "react";

class TodoForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={console.log("test")}>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={console.log("test2")}
          placeholder="New Item"
        />
        <button>Add Task</button>
        <button>Remove Completed</button>
      </form>
    );
  }
}

export default TodoForm;
