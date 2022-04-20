import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  filteredData: [],
  loading:false,
};

const Axios = require("axios");

export const getDefaultData = createAsyncThunk(
  "filters/getDefaultData",
  async (thunkAPI) => {
    const res = await Axios.get("http://localhost:3001/data").then(
      (d) => d.data
    );
    return res;
  }
);

export const filterByCategory = createAsyncThunk(
  "filters/filterByCategory",
  async (thunkAPI) => {
    const res = await Axios.get(
      `http://localhost:3001/data?category=${thunkAPI}`
    ).then((d) => d.data);
    return res;
  }
);

export const filterByRating = createAsyncThunk(
  "filters/filterByRating",
  async (thunkAPI) => {
    const res = await Axios.get(
      `http://localhost:3001/data?rating_gte=${thunkAPI}`
    ).then((d) => d.data);
    return res;
  }
);

export const filterHightoLow = createAsyncThunk(
  "filters/filterHightoLow",
  async (thunkAPI) => {
    const res = await Axios.get(
      `http://localhost:3001/data?_sort=${thunkAPI}&_order=desc`
    ).then((d) => d.data);
    return res;
  }
);

export const filterLowtoHigh = createAsyncThunk(
  "filters/filterLowtoHigh",
  async (thunkAPI) => {
    const res = await Axios.get(
      `http://localhost:3001/data?_sort=${thunkAPI}&_order=asc`
    ).then((d) => d.data);
    return res;
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: {

    [filterByCategory.pending]: (state) => {
      state.loading=true;
    },
    [filterByRating.pending]: (state) => {
      state.loading=true;
    },
    [filterHightoLow.pending]: (state) => {
      state.loading=true;
    },
    [filterLowtoHigh.pending]: (state) => {
      state.loading=true;
    },
    [getDefaultData.pending]: (state) => {
      state.loading=true;
    },
    

    [filterByCategory.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },
    [filterByRating.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },
    [filterHightoLow.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },
    [filterLowtoHigh.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },
    [getDefaultData.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },


    [filterByCategory.rejected]: (state) => {
      state.loading=false;
    },
    [filterByRating.rejected]: (state) => {
      state.loading=false;
    },
    [filterHightoLow.rejected]: (state) => {
      state.loading=false;
    },
    [filterLowtoHigh.rejected]: (state) => {
      state.loading=false;
    },
    [getDefaultData.rejected]: (state) => {
      state.loading=false;
    },    

  },
});

export default filterSlice.reducer;
