import { findAllByPlaceholderText } from "@testing-library/dom";
import React, { Component } from "react";
// import Todo from "./components/Todo";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const toDoList = [];

export default class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor method for creating an object with a class
  constructor() {
    super();
    this.state = {
      toDoList: toDoList,
      todo: "",
    };
  }

  //Updating State

  //Adding new item to list:
  addItem = (newItemName) => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        {
          item: newItemName,
          id: uuidv4(),
          completed: false,
        },
      ],
    });
  };

  //Toggle for completed task
  toggleCompleted = (taskId) => {
    this.setState({
      toDoList: this.state.toDoList.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !taskId.completed,
          };
        }
        return task;
      }),
    });
  };

  //Deleting Completed Tasks
  deleteCompleted = () => {
    this.setState({
      toDoList: this.state.toDoList.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List!</h2>
      </div>
    );
  }
}
