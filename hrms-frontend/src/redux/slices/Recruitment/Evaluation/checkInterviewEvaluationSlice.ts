import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface checkInterviewEvaluationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: checkInterviewEvaluationType = {
  data: null,
  loading: false,
  error: null,
};

const checkInterviewEvaluationSlice = createSlice({
  name: "checkInterviewEvaluationSlice",
  initialState,
  reducers: {
    checkInterviewEvaluation(state) {
      state.loading = true;
    },
    checkInterviewEvaluationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    checkInterviewEvaluationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  checkInterviewEvaluation,
  checkInterviewEvaluationSuccess,
  checkInterviewEvaluationFailure,
} = checkInterviewEvaluationSlice.actions;

export default checkInterviewEvaluationSlice.reducer;
