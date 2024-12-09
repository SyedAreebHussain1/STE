import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectDetails {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectDetails = {
  data: null,
  loading: false,
  error: null,
};

const getProjectDetailsSlice = createSlice({
  name: "getProjectDetails",
  initialState,
  reducers: {
    getProjectDetails(state) {
      state.loading = true;
    },
    getProjectDetailsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectDetailsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectDetails,
  getProjectDetailsSuccess,
  getProjectDetailsFailure,
} = getProjectDetailsSlice.actions;

export default getProjectDetailsSlice.reducer;
