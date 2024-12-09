import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface submitIdeaAnswersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: submitIdeaAnswersType = {
  data: null,
  loading: false,
  error: null,
};

const submitIdeaAnswersSlice = createSlice({
  name: "submitIdeaAnswersSlice",
  initialState,
  reducers: {
    submitIdeaAnswers(state) {
      state.loading = true;
    },
    submitIdeaAnswersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    submitIdeaAnswersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    submitIdeaAnswers,
    submitIdeaAnswersSuccess,
    submitIdeaAnswersFailure,
} = submitIdeaAnswersSlice.actions;

export default submitIdeaAnswersSlice.reducer;
