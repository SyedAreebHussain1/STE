import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteLeadInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteLeadInventory = {
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
    updateLeadStatusySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateLeadStatusFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateLeadStatus,
  updateLeadStatusySuccess,
  updateLeadStatusFailure,
} = updateLeadStatusSlice.actions;

export default updateLeadStatusSlice.reducer;
