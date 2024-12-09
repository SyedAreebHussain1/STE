import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetTotalLeadLogsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTotalLeadLogsType = {
  data: null,
  loading: false,
  error: null,
};

const getTotalLeadLogsSlice = createSlice({
  name: "getTotalLeadLogsSlice",
  initialState,
  reducers: {
    getTotalLeadLogs(state) {
      state.loading = true;
    },
    getTotalLeadLogsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTotalLeadLogsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getTotalLeadLogs,
  getTotalLeadLogsSuccess,
  getTotalLeadLogsFailure,
} = getTotalLeadLogsSlice.actions;

export default getTotalLeadLogsSlice.reducer;
