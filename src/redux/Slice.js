import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredData: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterByCategory: (state, { payload }) => {
      state.filteredData = payload;
    },
    filterByRating: (state, { payload }) => {
      state.filteredData = payload;
    },
    filterBySort: (state, { payload }) => {
      state.filteredData = payload;
    },
    getAllData: (state, { payload }) => {
      state.filteredData = payload;
    },
  },
});

export const {
  filterByCategory,
  filterByRating,
  filterBySort,
  getAllData,
} = filterSlice.actions;

export default filterSlice.reducer;