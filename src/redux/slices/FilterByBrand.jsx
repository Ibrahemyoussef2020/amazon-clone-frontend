import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "all",
};

const FilterByBrand = createSlice({
  name: "brand filter",
  initialState,
  reducers: {
    filterBrand: (state, action) => {
      state.brand = action.payload.toString() || "all";
    },
  },
});

export const { filterBrand } = FilterByBrand.actions;

export default FilterByBrand.reducer;
