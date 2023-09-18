import { configureStore } from "@reduxjs/toolkit";
import { bySection, byBrand, byType } from "./slices";

const store = configureStore({
  reducer: {
    section: bySection,
    brand: byBrand,
    type: byType,
  },
});

export default store;
