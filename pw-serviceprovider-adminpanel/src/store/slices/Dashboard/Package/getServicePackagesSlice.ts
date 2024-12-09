import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetServicePackagesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetServicePackagesType = {
  data: null,
  loading: false,
  error: null,
};

const getServicePackagesSlice = createSlice({
  name: "getServicePackagesSlice",
  initialState,
  reducers: {
    getServicePackages(state) {
      state.loading = true;
    },
    getServicePackagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getServicePackagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getServicePackages,
  getServicePackagesSuccess,
  getServicePackagesFailure,
} = getServicePackagesSlice.actions;

export default getServicePackagesSlice.reducer;
