import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteEvaluationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteEvaluationType = {
  data: null,
  loading: false,
  error: null,
};

const deleteEvaluationSlice = createSlice({
  name: "deleteEvaluationSlice",
  initialState,
  reducers: {
    deleteEvaluation(state) {
      state.loading = true;
    },
    deleteEvaluationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteEvaluationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteEvaluation,
  deleteEvaluationSuccess,
  deleteEvaluationFailure,
} = deleteEvaluationSlice.actions;

export default deleteEvaluationSlice.reducer;
