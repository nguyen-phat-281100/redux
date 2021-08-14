import React, { Component } from 'react';

export default class DemoListsAndKeys extends Component {
  productList = [
    {
      id: 1,
      name: 'Crystal Black',
      price: 100000,
      image: './images/black-car.jpg',
    },
    {
      id: 2,
      name: 'Modern Steel',
      price: 200000,
      image: './images/steel-car.jpg',
    },
    {
      id: 3,
      name: 'Lunar Silver',
      price: 300000,
      image: './images/silver-car.jpg',
    },
    {
      id: 4,
      name: 'Rallye Red',
      price: 400000,
      image: './images/red-car.jpg',
    },
  ];

  renderProducts = () => {
    return this.productList.map((car, index) => {
      const { id, name, price, image } = car;

      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img src={image} width="50px" />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="my-4">List Fashion Car</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
              {/* {this.renderProducts()} */}

              {this.productList.map((car, index) => {
                  const { id, name, price, image } = car;

                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>
                        <img src={image} width="50px" />
                      </td>
                    </tr>
                  );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
