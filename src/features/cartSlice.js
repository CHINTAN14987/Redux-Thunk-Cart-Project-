import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const NewItem = action.payload;
      const existingItem = state.items.find((item) => item.id === NewItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: NewItem.id,
          price: NewItem.price,
          quantity: 1,
          totalPrice: NewItem.price,
          name: NewItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + NewItem.price;
      }
    },
    removeItemfromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id === !id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
