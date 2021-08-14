import React, { Component } from "react";
import Counter from "./Counter";

export default class DemoReactLifeCycle extends Component {
  state = {
    isShowCounter: true,
  };
  removeCounter = () => {
    this.setState({
      isShowCounter: false,
    });
  };
  render() {
    console.log("DemoReactLifeCycle");

    return (
      <div className="text-center">
        <Counter />
        {/* {this.state.isShowCounter && } */}
        <button className="btn btn-danger my-5" onClick={this.removeCounter}>
          Remove counter
        </button>
      </div>
    );
  }
}
