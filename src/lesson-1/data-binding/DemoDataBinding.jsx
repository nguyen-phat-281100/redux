import React, { Component } from 'react';

class DemoDataBinding extends Component {
  title = 'CyberLearn.vn';
  productName = 'Iphone 12';
  description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, consequuntur!';

  renderProduct = () => (
    <div>
      <h1>{this.productName}</h1>
      <p>{this.description}</p>
    </div>
  );

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        {this.renderProduct()}
      </div>
    );
  }
}

export default DemoDataBinding;
