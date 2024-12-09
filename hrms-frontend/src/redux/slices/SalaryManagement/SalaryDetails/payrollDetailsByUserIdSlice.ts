import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayrollDetailsByUserIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PayrollDetailsByUserIdType = {
  data: null,
  loading: false,
  error: null,
};

const payrollDetailsByUserIdSlice = createSlice({
  name: "payrollDetailsByUserIdSlice",
  initialState,
  reducers: {
    payrollDetailsByUserId(state) {
      state.loading = true;
    },
    payrollDetailsByUserIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    payrollDetailsByUserIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPayrollDetailsByUserId(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  payrollDetailsByUserId,
  payrollDetailsByUserIdSuccess,
  payrollDetailsByUserIdFailure,
  clearPayrollDetailsByUserId,
} = payrollDetailsByUserIdSlice.actions;

export default payrollDetailsByUserIdSlice.reducer;
