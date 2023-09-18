import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: "all",
};

const FilterBySection = createSlice({
  name: "section filter",
  initialState,
  reducers: {
    filterSection: (state, action) => {
      state.section = action.payload.toString() || "all";
    },
  },
});

export const { filterSection } = FilterBySection.actions;

export default FilterBySection.reducer;
