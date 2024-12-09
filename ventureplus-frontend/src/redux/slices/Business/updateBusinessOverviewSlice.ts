import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateBusinessOverviewType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateBusinessOverviewType = {
  data: null,
  loading: false,
  error: null,
};

const updateBusinessOverviewSlice = createSlice({
  name: "updateBusinessOverviewSlice",
  initialState,
  reducers: {
    updateBusinessOverview(state) {
      state.loading = true;
    },
    updateBusinessOverviewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateBusinessOverviewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateBusinessOverview,
  updateBusinessOverviewSuccess,
  updateBusinessOverviewFailure,
} = updateBusinessOverviewSlice.actions;

export default updateBusinessOverviewSlice.reducer;
