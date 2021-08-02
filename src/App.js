import React, { Component } from "react";

export default class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Todo List!</h2>
      </div>
    );
  }
}
