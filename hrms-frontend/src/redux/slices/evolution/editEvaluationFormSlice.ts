import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditEvaluationFormType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditEvaluationFormType = {
  data: null,
  loading: false,
  error: null,
};

const editEvaluationFormSlice = createSlice({
  name: "editEvaluationFormSlice",
  initialState,
  reducers: {
    editEvaluationForm(state) {
      state.loading = true;
    },
    editEvaluationFormSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editEvaluationFormFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editEvaluationForm,
  editEvaluationFormSuccess,
  editEvaluationFormFailure,
} = editEvaluationFormSlice.actions;

export default editEvaluationFormSlice.reducer;
