import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetDepartmentForEvaluationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetDepartmentForEvaluationType = {
  data: null,
  loading: false,
  error: null,
};

const getDepartmentForEvaluationSlice = createSlice({
  name: "getDepartmentForEvaluationSlice",
  initialState,
  reducers: {
    getDepartmentForEvaluation(state) {
      state.loading = true;
    },
    getDepartmentForEvaluationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getDepartmentForEvaluationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getDepartmentForEvaluation,
  getDepartmentForEvaluationSuccess,
  getDepartmentForEvaluationFailure,
} = getDepartmentForEvaluationSlice.actions;

export default getDepartmentForEvaluationSlice.reducer;
