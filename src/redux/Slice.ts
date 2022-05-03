import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface defineState{
    filteredData:string[];
    loading:boolean;
}

interface extReducer{
  pending:boolean;
  fullfilled:[string,boolean];
  rejected:boolean;
}

const initialState : defineState= {
  filteredData: [],
  loading:false,
};


 const getAllData = createAsyncThunk(
  "filters/getAllData",
  async () => {
    const res = await axios.get("http://localhost:3001/data")
    return res;
  }
);

console.dir(getAllData());
/*
export const getAllData = createAsyncThunk(
  "filters/getAllData",
  async (thunkAPI) => {
    const res:object = await axios.get("http://localhost:3001/data").then(
      (d:unknown) => 
      console.log(typeof(d))
      //d.data
    );
    return res;
  }
);


export const filterByCategory = createAsyncThunk(
  "filters/filterByCategory",
  async (thunkAPI) => {
    const res = await axios.get(
      `http://localhost:3001/data?category=${thunkAPI}`
    ).then((d:any) => d.data);
    return res;
  }
);

export const filterByRating = createAsyncThunk(
  "filters/filterByRating",
  async (thunkAPI) => {
    const res = await axios.get(
      `http://localhost:3001/data?rating_gte=${thunkAPI}`
    ).then((d:any) => d.data);
    return res;
  }
);

export const filterBySort = createAsyncThunk(
  "filters/filterBySort",
  async (thunkAPI:object) => {
    const res = await axios.get(
      `http://localhost:3001/data?_sort=${thunkAPI.exp}&_order=${thunkAPI.order}`
    ).then((d:any) => d.data);
    return res;
  }
);


const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: extReducer={

    [filterByCategory.pending]: (state) => {
      state.loading=true;
    },
    [filterByRating.pending]: (state) => {
      state.loading=true;
    },
    [filterBySort.pending]: (state) => {
      state.loading=true;
    },
    [getAllData.pending]: (state) => {
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
    [filterBySort.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },
    [getAllData.fulfilled]: (state, { payload }) => {
      state.filteredData = payload;
      state.loading=false;
    },


    [filterByCategory.rejected]: (state) => {
      state.loading=false;
    },
    [filterByRating.rejected]: (state) => {
      state.loading=false;
    },
    [filterBySort.rejected]: (state) => {
      state.loading=false;
    },
    [getAllData.rejected]: (state) => {
      state.loading=false;
    },    

  },
});

export default filterSlice.reducer;
*/