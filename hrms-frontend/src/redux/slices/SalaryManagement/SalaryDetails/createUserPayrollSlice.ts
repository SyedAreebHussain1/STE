import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createUserPayrollType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createUserPayrollType = {
  data: null,
  loading: false,
  error: null,
};

const createUserPayrollSlice = createSlice({
  name: "createUserPayrollSlice",
  initialState,
  reducers: {
    createUserPayroll(state) {
      state.loading = true;
    },
    createUserPayrollSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createUserPayrollFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createUserPayroll,
  createUserPayrollSuccess,
  createUserPayrollFailure,
} = createUserPayrollSlice.actions;

export default createUserPayrollSlice.reducer;
