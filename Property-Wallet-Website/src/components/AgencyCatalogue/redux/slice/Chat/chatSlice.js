import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    available: true,
  },
  reducers: {
    setChatData: (state, action) => {
      state.data = action.payload;
      state.available = true;
    },
    removeChatData: (state, action) => {
      state.data = null;
      state.available = false;
    },
    clearChatData: (state, action) => {
      state.data = null;
      state.available = true;
    },
  },
});

export const { setChatData, removeChatData, clearChatData } = chatSlice.actions;

export default chatSlice.reducer;
