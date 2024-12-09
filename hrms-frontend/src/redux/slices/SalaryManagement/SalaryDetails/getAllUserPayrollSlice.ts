import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllUserPayrollType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllUserPayrollType = {
  data: null,
  loading: false,
  error: null,
};

const getAllUserPayrollSlice = createSlice({
  name: "getAllUserPayrollSlice",
  initialState,
  reducers: {
    getAllUserPayroll(state) {
      state.loading = true;
    },
    getAllUserPayrollSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllUserPayrollFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllUserPayroll,
  getAllUserPayrollSuccess,
  getAllUserPayrollFailure,
} = getAllUserPayrollSlice.actions;

export default getAllUserPayrollSlice.reducer;
