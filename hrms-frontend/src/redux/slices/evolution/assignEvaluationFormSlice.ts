import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AssignEvaluationFormType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AssignEvaluationFormType = {
  data: null,
  loading: false,
  error: null,
};

const assignEvaluationFormSlice = createSlice({
  name: "assignEvaluationFormSlice",
  initialState,
  reducers: {
    assignEvaluationForm(state) {
      state.loading = true;
    },
    assignEvaluationFormSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    assignEvaluationFormFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  assignEvaluationForm,
  assignEvaluationFormSuccess,
  assignEvaluationFormFailure,
} = assignEvaluationFormSlice.actions;

export default assignEvaluationFormSlice.reducer;
