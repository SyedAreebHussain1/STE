import { createSlice } from "@reduxjs/toolkit";

export const iamInterestedSlice = createSlice({
  name: "iamInterestedSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    iamInterestedPw: null,
    loading: false,
    error: null,
  },
  reducers: {
    iamInterested: (state) => {
      state.loading = true;
    },
    iamInterestedSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    iamInterestedFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    iamInterestedPwSuccess: (state, action) => {
      state.iamInterestedPw = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  iamInterested,
  iamInterestedSuccess,
  iamInterestedFailure,
  iamInterestedPwSuccess,
} = iamInterestedSlice.actions;

export default iamInterestedSlice.reducer;
