import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Slice";

export const store = configureStore({
  reducer: {
   filters: filterReducer,
  }
});
