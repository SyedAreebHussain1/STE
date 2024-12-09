import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateStatusType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateStatusType = {
  data: null,
  loading: false,
  error: null,
};

const updateStatusSlice = createSlice({
  name: "updateStatusSlice",
  initialState,
  reducers: {
    updateStatus(state) {
      state.loading = true;
    },
    updateStatusSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateStatusFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { updateStatus, updateStatusSuccess, updateStatusFailure } =
  updateStatusSlice.actions;

export default updateStatusSlice.reducer;
