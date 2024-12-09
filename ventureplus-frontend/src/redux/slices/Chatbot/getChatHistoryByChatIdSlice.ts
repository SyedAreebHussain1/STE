import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getChatHistoryByChatIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getChatHistoryByChatIdType = {
  data: null,
  loading: false,
  error: null,
};

const getChatHistoryByChatIdSlice = createSlice({
  name: "getChatHistoryByChatIdSlice",
  initialState,
  reducers: {
    getChatHistoryByChatId(state) {
      state.loading = true;
    },
    getChatHistoryByChatIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getChatHistoryByChatIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleanGetChatHistoryByChatId(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getChatHistoryByChatId,
  getChatHistoryByChatIdSuccess,
  getChatHistoryByChatIdFailure,
  cleanGetChatHistoryByChatId,
} = getChatHistoryByChatIdSlice.actions;

export default getChatHistoryByChatIdSlice.reducer;
