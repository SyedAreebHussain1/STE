import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateJobOpeningActiveStatusType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateJobOpeningActiveStatusType = {
  data: null,
  loading: false,
  error: null,
};

const updateJobOpeningActiveStatusSlice = createSlice({
  name: "updateJobOpeningActiveStatusSlice",
  initialState,
  reducers: {
    updateJobOpeningActiveStatus(state) {
      state.loading = true;
    },
    updateJobOpeningActiveStatusSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateJobOpeningActiveStatusFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    updateJobOpeningActiveStatus,
  updateJobOpeningActiveStatusSuccess,
  updateJobOpeningActiveStatusFailure,
} = updateJobOpeningActiveStatusSlice.actions;

export default updateJobOpeningActiveStatusSlice.reducer;
