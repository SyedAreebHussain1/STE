import { createSlice } from "@reduxjs/toolkit";

export const analyticClickSlice = createSlice({
  name: "analyticClickSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    analyticClick: (state) => {
      state.loading = true;
    },
    analyticClickSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    analyticClickFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { analyticClick, analyticClickSuccess, analyticClickFailure } =
  analyticClickSlice.actions;

export default analyticClickSlice.reducer;
