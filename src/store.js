import { configureStore } from "@reduxjs/toolkit";
import UIreducer from "./features/uiSlice";
import Cartreducer from "./features/cartSlice";

const store = configureStore({ reducer: { ui: UIreducer, cart: Cartreducer } });
export default store;
