import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface response {
  data: any[];
}

interface thunk {
  exp: string | number;
  order?: string;
}

interface defineState {
  filteredData: string[];
  loading: boolean;
}

const initialState: defineState = {
  filteredData: [],
  loading: false,
};

export const getAllData = createAsyncThunk("filters/getAllData", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = (await axios.get("http://localhost:3001/data")) as response;
    const res2 = res.data;
    return res2;
  } catch (err: unknown) {
    throw err;
  }
});

export const filterByCategory = createAsyncThunk(
  "filters/filterByCategory",
  async (thunkAPI: thunk) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = (await axios.get(
        `http://localhost:3001/data?category=${thunkAPI.exp}`
      )) as response;
      const res2 = res.data;
      return res2;
    } catch (err: unknown) {
      throw err;
    }
  }
);

export const filterByRating = createAsyncThunk(
  "filters/filterByRating",
  async (thunkAPI: thunk) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = (await axios.get(
        `http://localhost:3001/data?rating_gte=${thunkAPI.exp}`
      )) as response;
      const res2 = res.data;
      return res2;
    } catch (err: unknown) {
      throw err;
    }
  }
);

export const filterBySort = createAsyncThunk(
  "filters/filterBySort",
  async (thunkAPI: thunk) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = (await axios.get(
        `http://localhost:3001/data?_sort=${thunkAPI.exp}&_order=${thunkAPI.order}`
      )) as response;
      const res2 = res.data;
      return res2;
    } catch (err: unknown) {
      throw err;
    }
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filterByCategory.pending, (state: defineState) => {
      state.loading = true;
    });

    builder.addCase(filterByRating.pending, (state: defineState) => {
      state.loading = true;
    });

    builder.addCase(filterBySort.pending, (state: defineState) => {
      state.loading = true;
    });

    builder.addCase(getAllData.pending, (state: defineState) => {
      state.loading = true;
    });

    builder.addCase(
      filterByCategory.fulfilled,
      (state: defineState, { payload }) => {
        state.filteredData = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      filterByRating.fulfilled,
      (state: defineState, { payload }) => {
        state.filteredData = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      filterBySort.fulfilled,
      (state: defineState, { payload }) => {
        state.filteredData = payload;
        state.loading = false;
      }
    );

    builder.addCase(getAllData.fulfilled, (state: defineState, { payload }) => {
      state.filteredData = payload;
      state.loading = false;
    });

    builder.addCase(filterByCategory.rejected, (state: defineState) => {
      state.loading = false;
    });

    builder.addCase(filterByRating.rejected, (state: defineState) => {
      state.loading = false;
    });

    builder.addCase(filterBySort.rejected, (state: defineState) => {
      state.loading = false;
    });

    builder.addCase(getAllData.rejected, (state: defineState) => {
      state.loading = false;
    });
  },
});

export default filterSlice.reducer;
