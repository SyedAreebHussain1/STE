import { createSlice } from "@reduxjs/toolkit";

export const initiateChatSlice = createSlice({
  name: "initiateChatSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    initiateChat: (state) => {
      state.loading = true;
    },
    initiateChatSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    initiateChatFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  initiateChat,
  initiateChatSuccess,
  initiateChatFailure,
} = initiateChatSlice.actions;

export default initiateChatSlice.reducer;
