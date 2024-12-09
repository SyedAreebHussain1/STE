import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllEvaluationsForManagmntType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllEvaluationsForManagmntType = {
  data: null,
  loading: false,
  error: null,
};

const getAllEvaluationsForManagmntSlice = createSlice({
  name: "getAllEvaluationsSlice",
  initialState,
  reducers: {
    getAllEvaluationsForManagmnt(state) {
      state.loading = true;
    },
    getAllEvaluationsForManagmntSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllEvaluationsForManagmntFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllEvaluationsForManagmnt,
  getAllEvaluationsForManagmntSuccess,
  getAllEvaluationsForManagmntFailure,
} = getAllEvaluationsForManagmntSlice.actions;

export default getAllEvaluationsForManagmntSlice.reducer;
