import { configureStore } from "@reduxjs/toolkit";
import {cartReducer , suggegtionsReducer} from "./slices";

const store = configureStore({
  reducer: {
    cart:cartReducer,
    suggegtions:suggegtionsReducer
  },
});

export default store;
