import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAttemptedPitchAnswers {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAttemptedPitchAnswers = {
  data: null,
  loading: false,
  error: null,
};

const getAttemptedPitchAnswersSlice = createSlice({
  name: "getAttemptedPitchAnswers",
  initialState,
  reducers: {
    getAttemptedPitchAnswers(state) {
      state.loading = true;
    },
    getAttemptedPitchAnswersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAttemptedPitchAnswersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAttemptedPitchAnswers,
  getAttemptedPitchAnswersSuccess,
  getAttemptedPitchAnswersFailure,
} = getAttemptedPitchAnswersSlice.actions;

export default getAttemptedPitchAnswersSlice.reducer;
