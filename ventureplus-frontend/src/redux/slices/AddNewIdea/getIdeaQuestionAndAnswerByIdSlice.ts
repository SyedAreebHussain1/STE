import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getIdeaQuestionAndAnswerById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getIdeaQuestionAndAnswerById = {
  data: null,
  loading: false,
  error: null,
};

const getIdeaQuestionAndAnswerByIdSlice = createSlice({
  name: "getIdeaQuestionAndAnswerById",
  initialState,
  reducers: {
    getIdeaQuestionAndAnswerById(state) {
      state.loading = true;
    },
    getIdeaQuestionAndAnswerByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getIdeaQuestionAndAnswerByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getIdeaQuestionAndAnswerById,
  getIdeaQuestionAndAnswerByIdSuccess,
  getIdeaQuestionAndAnswerByIdFailure,
} = getIdeaQuestionAndAnswerByIdSlice.actions;

export default getIdeaQuestionAndAnswerByIdSlice.reducer;
