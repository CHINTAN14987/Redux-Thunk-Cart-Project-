import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartVisible: false };
const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export default UISlice.reducer;
export const UIactions = UISlice.actions;
