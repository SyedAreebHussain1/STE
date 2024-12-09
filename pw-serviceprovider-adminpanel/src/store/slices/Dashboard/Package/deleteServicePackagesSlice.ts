import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteType = {
  data: null,
  loading: false,
  error: null,
};
const deleteServicePackagesSlice = createSlice({
  name: "deleteServicePackagesSlice",
  initialState,
  reducers: {
    deleteServicePackages(state) {
      state.loading = true;
    },
    deleteServicePackagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteServicePackagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteServicePackages,
  deleteServicePackagesSuccess,
  deleteServicePackagesFailure,
} = deleteServicePackagesSlice.actions;

export default deleteServicePackagesSlice.reducer;
