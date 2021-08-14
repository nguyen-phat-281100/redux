import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    // chidren props tương tự innerHTML, lấy nội dung giữa 2 thẻ đóng mở component
    return <button className="btn btn-success">{this.props.children}</button>;
  }
}
