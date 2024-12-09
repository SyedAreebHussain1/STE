import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllEvaluationsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllEvaluationsType = {
  data: null,
  loading: false,
  error: null,
};

const getAllEvaluationsSlice = createSlice({
  name: "getAllEvaluationsSlice",
  initialState,
  reducers: {
    getAllEvaluations(state) {
      state.loading = true;
    },
    getAllEvaluationsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllEvaluationsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllEvaluations,
  getAllEvaluationsSuccess,
  getAllEvaluationsFailure,
} = getAllEvaluationsSlice.actions;

export default getAllEvaluationsSlice.reducer;
