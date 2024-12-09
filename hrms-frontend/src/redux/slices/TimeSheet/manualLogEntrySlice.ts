import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ManualLogEntryType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ManualLogEntryType = {
  data: null,
  loading: false,
  error: null,
};

const manualLogEntrySlice = createSlice({
  name: "manualLogEntrySlice",
  initialState,
  reducers: {
    manualLogEntry(state) {
      state.loading = true;
    },
    manualLogEntrySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    manualLogEntryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearManualLogEntry(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  manualLogEntry,
  manualLogEntrySuccess,
  manualLogEntryFailure,
  clearManualLogEntry,
} = manualLogEntrySlice.actions;

export default manualLogEntrySlice.reducer;
