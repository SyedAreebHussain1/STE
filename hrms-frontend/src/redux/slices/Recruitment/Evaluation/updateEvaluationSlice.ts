import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateEvaluationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateEvaluationType = {
  data: null,
  loading: false,
  error: null,
};

const updateEvaluationSlice = createSlice({
  name: "updateEvaluationSlice",
  initialState,
  reducers: {
    updateEvaluation(state) {
      state.loading = true;
    },
    updateEvaluationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateEvaluationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    updateEvaluation,
  updateEvaluationSuccess,
  updateEvaluationFailure,
} = updateEvaluationSlice.actions;

export default updateEvaluationSlice.reducer;
