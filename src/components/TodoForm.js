import React from "react";

class TodoForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.newTask}
          placeholder="New Item"
        />
        <button type="submit">Add Task</button>
        <button
          type="button"
          onClick={() => {
            this.props.deleteCompleted();
          }}
        >
          Remove Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
