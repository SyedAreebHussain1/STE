import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getIdeaQuestionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getIdeaQuestionType = {
  data: null,
  loading: false,
  error: null,
};

const getIdeaQuestionSlice = createSlice({
  name: "getIdeaQuestionSlice",
  initialState,
  reducers: {
    getIdeaQuestion(state) {
      state.loading = true;
    },
    getIdeaQuestionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getIdeaQuestionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getIdeaQuestion,
    getIdeaQuestionSuccess,
    getIdeaQuestionFailure,
} = getIdeaQuestionSlice.actions;

export default getIdeaQuestionSlice.reducer;
