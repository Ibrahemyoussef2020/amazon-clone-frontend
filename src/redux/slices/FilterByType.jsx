import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "all",
};

const FilterByType = createSlice({
  name: "type filter",
  initialState,
  reducers: {
    filterType: (state, action) => {
      state.type = action.payload.toString() || "all";
    },
  },
});

export const { filterType } = FilterByType.actions;

export default FilterByType.reducer;
