import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllChatType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllChatType = {
  data: null,
  loading: false,
  error: null,
};

const getAllChatSlice = createSlice({
  name: "getAllChatSlice",
  initialState,
  reducers: {
    getAllChat(state) {
      state.loading = true;
    },
    getAllChatSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllChatFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllChat(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAllChat,
  getAllChatSuccess,
  getAllChatFailure,
  clearGetAllChat,
} = getAllChatSlice.actions;

export default getAllChatSlice.reducer;
