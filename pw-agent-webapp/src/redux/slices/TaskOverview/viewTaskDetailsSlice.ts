import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface viewTaskDetailsSliceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: viewTaskDetailsSliceType = {
  data: null,
  loading: false,
  error: null,
};

const viewTaskDetailsSlice = createSlice({
  name: "viewTaskDetailsSlice",
  initialState,
  reducers: {
    viewTaskDetails(state) {
      state.loading = true;
    },
    viewTaskDetailsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    viewTaskDetailsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearviewTaskDetails(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  viewTaskDetails,
  viewTaskDetailsSuccess,
  viewTaskDetailsFailure,
  clearviewTaskDetails,
} = viewTaskDetailsSlice.actions;

export default viewTaskDetailsSlice.reducer;
