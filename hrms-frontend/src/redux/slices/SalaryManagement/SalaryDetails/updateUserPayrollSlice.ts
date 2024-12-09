import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateUserPayrollType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateUserPayrollType = {
  data: null,
  loading: false,
  error: null,
};

const updateUserPayrollSlice = createSlice({
  name: "updateUserPayrollSlice",
  initialState,
  reducers: {
    updateUserPayroll(state) {
      state.loading = true;
    },
    updateUserPayrollSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserPayrollFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateUserPayroll(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  updateUserPayroll,
  updateUserPayrollSuccess,
  updateUserPayrollFailure,
  clearUpdateUserPayroll,
} = updateUserPayrollSlice.actions;

export default updateUserPayrollSlice.reducer;
