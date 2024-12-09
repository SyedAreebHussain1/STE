import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PackagesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PackagesType = {
  data: null,
  loading: false,
  error: null,
};

const packagesSlice = createSlice({
  name: "packagesSlice",
  initialState,
  reducers: {
    packages(state) {
      state.loading = true;
    },
    packagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    packagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPackages(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { packages, packagesSuccess, packagesFailure, clearPackages } =
  packagesSlice.actions;

export default packagesSlice.reducer;
