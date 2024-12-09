import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface acceptStaffRequest {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: acceptStaffRequest = {
  data: null,
  loading: false,
  error: null,
};

const acceptStaffRequestSlicer = createSlice({
  name: "acceptStaffRequest",
  initialState,
  reducers: {
    acceptStaffRequest(state) {
      state.loading = true;
    },
    acceptStaffRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    acceptStaffRequestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  acceptStaffRequest,
  acceptStaffRequestSuccess,
  acceptStaffRequestFailure,
} = acceptStaffRequestSlicer.actions;

export default acceptStaffRequestSlicer.reducer;
