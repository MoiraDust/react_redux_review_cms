import React, { Component } from "react";

export default class ClassReview extends Component {
  state = {
    num: 1,
  };
  Addnum = () => {
    console.log("add");
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    return (
      <div>
        <h2>累加</h2>
        <h3>The initial number:{this.state.num}</h3>
        <button onClick={this.Addnum}>Add</button>
      </div>
    );
  }
}
