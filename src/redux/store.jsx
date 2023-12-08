import { configureStore } from "@reduxjs/toolkit";
import {cartReducer , suggegtionsReducer , asideReducer , suggegtionsMobileFilterReducer , LogReducer} from "./slices";

const store = configureStore({
  reducer: {
    cart:cartReducer,
    suggegtions:suggegtionsReducer,
    suggegtionsMobileFilter:suggegtionsMobileFilterReducer,
    aside:asideReducer,
    log:LogReducer
  },
  devTools:false
});

export default store;
