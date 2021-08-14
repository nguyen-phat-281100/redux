import React, { Component } from 'react';
import ProductList from './ProductList';
import productList from './data.json';
import ShoppingList from './ShoppingList';

export default class ShoesShop extends Component {
  state = {
    shoppingList: [],
  };

  addToShoppingList = shoe => {
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm xem trong mảng đã có sản phẩm đó hay chưa
    const index = shoppingListUpdate.findIndex(item => item.id === shoe.id);

    if (index === -1) {
      // Chưa có trong mảng => thêm data vào mảng
      const newShoe = {
        ...shoe,
        // Thêm thuộc tính quantity vào object
        quantity: 1,
      };
      shoppingListUpdate.push(newShoe);
    } else {
      // Đã tồn tại trong mảng => tăng số lượng lên 1 đơn vị
      shoppingListUpdate[index].quantity += 1;
    }

    // Cập nhật state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  updateQuantity = (id, action) => {
    // action: true => tănng, false => giảm
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm vị trí sản phẩm cần cập nhật số lượng
    const index = shoppingListUpdate.findIndex(item => item.id === id);

    if (action) {
      shoppingListUpdate[index].quantity += 1;
    } else {
      if (shoppingListUpdate[index].quantity > 1) {
        shoppingListUpdate[index].quantity -= 1;
      }
    }

    // Cập nhật state
    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  removeFromShoppingList = id => {
    const shoppingListUpdate = [...this.state.shoppingList];

    // Tìm vị trí sản phẩm cần xoá
    const index = shoppingListUpdate.findIndex(item => item.id === id);

    // Xoá 1 phần tử tại vị trí index
    shoppingListUpdate.splice(index, 1);

    this.setState({
      shoppingList: shoppingListUpdate,
    });
  };

  render() {
    const { shoppingList } = this.state;

    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-7 text-right">
            <h1>Shoes Shop</h1>
          </div>
          <div className="col-5 text-right">
            <button
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#shoppingList"
            >
              Shopping List ({shoppingList.length})
            </button>
          </div>
        </div>
        <ShoppingList
          shoppingList={shoppingList}
          updateQuantity={this.updateQuantity}
          removeFromShoppingList={this.removeFromShoppingList}
        />
        <ProductList
          productList={productList}
          addToShoppingList={this.addToShoppingList}
        />
      </div>
    );
  }
}
