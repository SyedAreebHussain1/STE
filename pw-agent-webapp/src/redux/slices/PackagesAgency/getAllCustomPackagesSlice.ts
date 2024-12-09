import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCustomPackagesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCustomPackagesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCustomPackagesSlice = createSlice({
  name: "getAllCustomPackagesSlice",
  initialState,
  reducers: {
    getAllCustomPackages(state) {
      state.loading = true;
    },
    getAllCustomPackagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCustomPackagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllCustomPackages(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getAllCustomPackages,
  getAllCustomPackagesSuccess,
  getAllCustomPackagesFailure,
  clearGetAllCustomPackages,
} = getAllCustomPackagesSlice.actions;

export default getAllCustomPackagesSlice.reducer;
