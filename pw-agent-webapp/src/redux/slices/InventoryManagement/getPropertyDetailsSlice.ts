import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getPropertyDetails {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getPropertyDetails = {
  data: null,
  loading: false,
  error: null,
};

const getPropertyDetailsSlice = createSlice({
  name: "getPropertyDetails",
  initialState,
  reducers: {
    getPropertyDetails(state) {
      state.loading = true;
    },
    getPropertyDetailsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPropertyDetailsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPropertyDetails,
  getPropertyDetailsSuccess,
  getPropertyDetailsFailure,
} = getPropertyDetailsSlice.actions;

export default getPropertyDetailsSlice.reducer;
