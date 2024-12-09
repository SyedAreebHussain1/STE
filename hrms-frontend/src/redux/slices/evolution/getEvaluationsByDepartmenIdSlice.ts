import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetEvaluationsByDepartmenIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetEvaluationsByDepartmenIdType = {
  data: null,
  loading: false,
  error: null,
};

const getEvaluationsByDepartmenIdSlice = createSlice({
  name: "getEvaluationsByDepartmenIdSlice",
  initialState,
  reducers: {
    getEvaluationsByDepartmenId(state) {
      state.loading = true;
    },
    getEvaluationsByDepartmenIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEvaluationsByDepartmenIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetEvaluationsByDepartmenId(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getEvaluationsByDepartmenId,
  getEvaluationsByDepartmenIdSuccess,
  getEvaluationsByDepartmenIdFailure,
  clearGetEvaluationsByDepartmenId,
} = getEvaluationsByDepartmenIdSlice.actions;

export default getEvaluationsByDepartmenIdSlice.reducer;
