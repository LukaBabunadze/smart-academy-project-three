import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      state.cartProducts[index].quantity -= 1;
    },
    deleteFromCart: (state, action) => {},
  },
});

export const { addToCart, deleteFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [arr1, arr2]; // [[1, 2, 3], [4, 5, 6]]
// const arr4 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
