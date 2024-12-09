import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllQuestionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllQuestionType = {
  data: null,
  loading: false,
  error: null,
};

const getAllQuestionSlice = createSlice({
  name: "getAllQuestionSlice",
  initialState,
  reducers: {
    getAllQuestion(state) {
      state.loading = true;
    },
    getAllQuestionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllQuestionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllQuestion, getAllQuestionSuccess, getAllQuestionFailure } =
  getAllQuestionSlice.actions;

export default getAllQuestionSlice.reducer;
