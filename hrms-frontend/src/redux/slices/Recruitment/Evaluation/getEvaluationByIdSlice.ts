import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getEvaluationByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getEvaluationByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getEvaluationByIdSlice = createSlice({
  name: "getEvaluationByIdSlice",
  initialState,
  reducers: {
    getEvaluationById(state) {
      state.loading = true;
    },
    getEvaluationByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEvaluationByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getEvaluationById,
  getEvaluationByIdSuccess,
  getEvaluationByIdFailure,
} = getEvaluationByIdSlice.actions;

export default getEvaluationByIdSlice.reducer;
