import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getPayrollByEmployeeIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getPayrollByEmployeeIdType = {
  data: null,
  loading: false,
  error: null,
};

const getPayrollByEmployeeIdSlice = createSlice({
  name: "getPayrollByEmployeeIdSlice",
  initialState,
  reducers: {
    getPayrollByEmployeeId(state) {
      state.loading = true;
    },
    getPayrollByEmployeeIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPayrollByEmployeeIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPayrollByEmployeeId,
  getPayrollByEmployeeIdSuccess,
  getPayrollByEmployeeIdFailure,
} = getPayrollByEmployeeIdSlice.actions;

export default getPayrollByEmployeeIdSlice.reducer;
