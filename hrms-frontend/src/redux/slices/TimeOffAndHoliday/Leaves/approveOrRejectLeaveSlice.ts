import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface approveOrRejectLeaveType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: approveOrRejectLeaveType = {
  data: null,
  loading: false,
  error: null,
};

const approveOrRejectLeaveSlice = createSlice({
  name: "approveOrRejectLeaveSlice",
  initialState,
  reducers: {
    approveOrRejectLeave(state) {
      state.loading = true;
    },
    approveOrRejectLeaveSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    approveOrRejectLeaveFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  approveOrRejectLeave,
  approveOrRejectLeaveSuccess,
  approveOrRejectLeaveFailure,
} = approveOrRejectLeaveSlice.actions;

export default approveOrRejectLeaveSlice.reducer;
