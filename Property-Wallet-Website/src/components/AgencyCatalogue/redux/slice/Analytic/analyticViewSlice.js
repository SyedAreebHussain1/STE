import { createSlice } from "@reduxjs/toolkit";

export const analyticViewSlice = createSlice({
  name: "analyticViewSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    analyticView: (state) => {
      state.loading = true;
    },
    analyticViewSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    analyticViewFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { analyticView, analyticViewSuccess, analyticViewFailure } =
  analyticViewSlice.actions;

export default analyticViewSlice.reducer;
