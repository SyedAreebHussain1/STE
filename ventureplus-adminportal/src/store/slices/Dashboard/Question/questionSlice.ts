import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionType = {
  data: null,
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    postQuestionSlice(state) {
      state.loading = true;
    },
    postQuestionSliceSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postQuestionSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPostQuestion(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    updateQuestion(state) {
      state.loading = true;
    },
    updateQuestionSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    updateQuestionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateQuestion(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getQuestionAdminSlice(state) {
      state.loading = true;
    },
    getQuestionAdminSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getQuestionAdminSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetQuestionAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteQuestion(state) {
      state.loading = true;
    },
    deleteQuestionSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteQuestionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postQuestionSlice,
  postQuestionSliceSuccess,
  postQuestionSliceFailure,
  clearPostQuestion,
  getQuestionAdminSlice,
  getQuestionAdminSliceSuccess,
  getQuestionAdminSliceFailure,
  clearGetQuestionAdmin,
  updateQuestion,
  updateQuestionSuccess,
  updateQuestionFailure,
  deleteQuestion,
  deleteQuestionSuccess,
  deleteQuestionFailure,
} = questionSlice.actions;

export default questionSlice.reducer;
