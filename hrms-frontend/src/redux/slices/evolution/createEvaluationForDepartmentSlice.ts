import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateEvaluationForDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateEvaluationForDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const createEvaluationForDepartmentSlice = createSlice({
  name: "createEvaluationForDepartmentSlice",
  initialState,
  reducers: {
    createEvaluationForDepartment(state) {
      state.loading = true;
    },
    createEvaluationForDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createEvaluationForDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createEvaluationForDepartment,
  createEvaluationForDepartmentSuccess,
  createEvaluationForDepartmentFailure,
} = createEvaluationForDepartmentSlice.actions;

export default createEvaluationForDepartmentSlice.reducer;
