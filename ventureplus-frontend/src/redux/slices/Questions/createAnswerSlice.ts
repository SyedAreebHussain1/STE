import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateAnswer {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateAnswer = {
  data: null,
  loading: false,
  error: null,
};

const createAnswerSlice = createSlice({
  name: "createAnswerSlice",
  initialState,
  reducers: {
    createAnswer(state) {
      state.loading = true;
    },
    createAnswerSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createAnswerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreateAnswer(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  createAnswer,
  createAnswerSuccess,
  createAnswerFailure,
  clearCreateAnswer,
} = createAnswerSlice.actions;

export default createAnswerSlice.reducer;
