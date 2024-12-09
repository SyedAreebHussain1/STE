import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface rejectStaffRequest {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: rejectStaffRequest = {
  data: null,
  loading: false,
  error: null,
};

const rejectStaffRequestSlicer = createSlice({
  name: "rejectStaffRequest",
  initialState,
  reducers: {
    rejectStaffRequest(state) {
      state.loading = true;
    },
    rejectStaffRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    rejectStaffRequestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  rejectStaffRequest,
  rejectStaffRequestSuccess,
  rejectStaffRequestFailure,
} = rejectStaffRequestSlicer.actions;

export default rejectStaffRequestSlicer.reducer;
