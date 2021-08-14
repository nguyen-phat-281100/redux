import * as shoesShopConstants from '../constants/shoesShopConstants';

const initialState = {
  shoppingList: [],
};

const shoesShopReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case shoesShopConstants.ADD_TO_SHOPPING_LIST: {
      const shoppingListUpdate = [...state.shoppingList];

      // Tìm xem trong mảng đã có sản phẩm đó hay chưa
      const index = shoppingListUpdate.findIndex(
        item => item.id === payload.id
      );

      if (index === -1) {
        // Chưa có trong mảng => thêm data vào mảng
        const newShoe = {
          ...payload,
          // Thêm thuộc tính quantity vào object
          quantity: 1,
        };
        shoppingListUpdate.push(newShoe);
      } else {
        // Đã tồn tại trong mảng => tăng số lượng lên 1 đơn vị
        shoppingListUpdate[index].quantity += 1;
      }

      // Trả về state mới sau khi update
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case shoesShopConstants.UPDATE_QUANTITY: {
      const { id, type } = payload;

      // type: true => tăng, false => giảm
      const shoppingListUpdate = [...state.shoppingList];

      // Tìm vị trí sản phẩm cần cập nhật số lượng
      const index = shoppingListUpdate.findIndex(item => item.id === id);

      if (type) {
        shoppingListUpdate[index].quantity += 1;
      } else {
        if (shoppingListUpdate[index].quantity > 1) {
          shoppingListUpdate[index].quantity -= 1;
        }
      }

      // Trả về state mới
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case shoesShopConstants.REMOVE_FROM_SHOPPING_LIST: {
      const shoppingListUpdate = [...state.shoppingList];

      // Tìm vị trí sản phẩm cần xoá
      const index = shoppingListUpdate.findIndex(item => item.id === payload);

      // Xoá 1 phần tử tại vị trí index
      shoppingListUpdate.splice(index, 1);

      // Trả về state mới
      return { ...state, shoppingList: shoppingListUpdate };
    }
    default:
      return state;
  }
};

export default shoesShopReducer;
