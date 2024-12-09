import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetQuestion {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetQuestion = {
  data: null,
  loading: false,
  error: null,
};

const getQuestionSlice = createSlice({
  name: "getQuestionSlice",
  initialState,
  reducers: {
    getQuestion(state) {
      state.loading = true;
    },
    getQuestionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getQuestionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getQuestion, getQuestionSuccess, getQuestionFailure } =
  getQuestionSlice.actions;

export default getQuestionSlice.reducer;
