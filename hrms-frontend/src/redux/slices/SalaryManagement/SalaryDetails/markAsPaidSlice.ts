import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkAsPaidType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: MarkAsPaidType = {
  data: null,
  loading: false,
  error: null,
};

const markAsPaidSlice = createSlice({
  name: "markAsPaidSlice",
  initialState,
  reducers: {
    markAsPaid(state) {
      state.loading = true;
    },
    markAsPaidSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    markAsPaidFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { markAsPaid, markAsPaidSuccess, markAsPaidFailure } =
  markAsPaidSlice.actions;

export default markAsPaidSlice.reducer;
