import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateLeadStatusType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateLeadStatusType = {
  data: null,
  loading: false,
  error: null,
};

const updateLeadStatusSlice = createSlice({
  name: "updateLeadStatusSlice",
  initialState,
  reducers: {
    updateLeadStatus(state) {
      state.loading = true;
    },
    updateLeadStatusSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateLeadStatusFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateLeadStatus(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    updateLeadStatus,
    updateLeadStatusSuccess,
    updateLeadStatusFailure,
    clearUpdateLeadStatus,
} = updateLeadStatusSlice.actions;

export default updateLeadStatusSlice.reducer;
