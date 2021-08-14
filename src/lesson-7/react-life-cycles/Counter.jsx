import React, { Component } from "react";

export default class Counter extends Component {
  //mounting
  constructor(props) {
    super(); //neeus muoons xaif props trong hàm(this.props) thì phải super(props)
    console.log("Counter > constructor");
  }

  state = {
    number: 0,
  };

  increase = () => {
    this.setState({
      number: (this.state.number += 1),
    });
  };

  decrease = () => {
    this.setState({
      number: (this.state.number -= 1),
    });
  };

  //should component update
  //   shouldComponentUpdate(nextProps, nextState) {
  // return false; //chỉ có thằng cha chạy
  // // return true;  cha con chạy hết
  // if (nextProps.isShowCounter === this.props.isShowCounter) {
  //   return false;
  // }
  // return true;
  //   }

  render() {
    console.log("Counter > render");
    return (
      <div className="text-center">
        <h1 className="my-5">Counter</h1>
        <button className="btn btn-danger" onClick={this.decrease}>
          -
        </button>{" "}
        {this.state.number}{" "}
        <button className="btn btn-success" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }

  //Mounting
  componentDidMount() {
    //dùng để call api
    this.interval = setInterval(() => {
      console.log("Counter > componentDidMount");
    }, 1000);
  }

  //updating

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter > componentDidUpdate");
  }
  //   Mounting
  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Counter > componentWillUnmount");
  }
}
