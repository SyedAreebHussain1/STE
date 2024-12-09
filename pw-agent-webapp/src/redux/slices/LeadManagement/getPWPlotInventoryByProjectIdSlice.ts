import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetPWPlotInventoryByProjectIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetPWPlotInventoryByProjectIdType = {
  data: null,
  loading: false,
  error: null,
};

const getPWPlotInventoryByProjectIdSlice = createSlice({
  name: "getPWPlotInventoryByProjectIdSlice",
  initialState,
  reducers: {
    getPWPlotInventoryByProjectId(state) {
      state.loading = true;
    },
    getPWPlotInventoryByProjectIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPWPlotInventoryByProjectIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPWPlotInventoryByProjectId,
  getPWPlotInventoryByProjectIdSuccess,
  getPWPlotInventoryByProjectIdFailure,
} = getPWPlotInventoryByProjectIdSlice.actions;

export default getPWPlotInventoryByProjectIdSlice.reducer;
