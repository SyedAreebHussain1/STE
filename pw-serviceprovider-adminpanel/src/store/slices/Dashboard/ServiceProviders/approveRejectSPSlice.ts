import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApproveRejectSPType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ApproveRejectSPType = {
  data: null,
  loading: false,
  error: null,
};

const approveRejectSPSlice = createSlice({
  name: "approveRejectSPSlice",
  initialState,
  reducers: {
    approveRejectSP(state) {
      state.loading = true;
    },
    approveRejectSPSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    approveRejectSPFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  approveRejectSP,
  approveRejectSPSuccess,
  approveRejectSPFailure,
} = approveRejectSPSlice.actions;

export default approveRejectSPSlice.reducer;
