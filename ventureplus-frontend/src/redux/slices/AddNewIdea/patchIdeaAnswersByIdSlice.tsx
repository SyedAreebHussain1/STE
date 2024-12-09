import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface patchIdeaAnswersByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: patchIdeaAnswersByIdType = {
  data: null,
  loading: false,
  error: null,
};

const patchIdeaAnswersByIdSlice = createSlice({
  name: "patchIdeaAnswersByIdSlice",
  initialState,
  reducers: {
    patchIdeaAnswersById(state) {
      state.loading = true;
    },
    patchIdeaAnswersByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    patchIdeaAnswersByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    patchIdeaAnswersById,
    patchIdeaAnswersByIdSuccess,
    patchIdeaAnswersByIdFailure,
} = patchIdeaAnswersByIdSlice.actions;

export default patchIdeaAnswersByIdSlice.reducer;
