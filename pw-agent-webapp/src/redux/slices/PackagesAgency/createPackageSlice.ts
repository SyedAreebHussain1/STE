import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreatePackageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreatePackageType = {
  data: null,
  loading: false,
  error: null,
};

const createPackageSlice = createSlice({
  name: "createPackageSlice",
  initialState,
  reducers: {
    createPackage(state) {
      state.loading = true;
    },
    createPackageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createPackageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreatePackage(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  createPackage,
  createPackageSuccess,
  createPackageFailure,
  clearCreatePackage,
} = createPackageSlice.actions;

export default createPackageSlice.reducer;
