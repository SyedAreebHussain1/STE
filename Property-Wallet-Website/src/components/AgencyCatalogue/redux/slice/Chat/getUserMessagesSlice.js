import { createSlice } from "@reduxjs/toolkit";

export const getUserMessagesSlice = createSlice({
  name: "getUserMessagesSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getUserMessages: (state) => {
      state.loading = true;
    },
    getUserMessagesSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserMessagesFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getUserMessages,
  getUserMessagesSuccess,
  getUserMessagesFailure,
} = getUserMessagesSlice.actions;

export default getUserMessagesSlice.reducer;
