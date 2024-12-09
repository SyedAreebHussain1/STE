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
    postCreatePackageSlice(state) {
      state.loading = true;
    },
    postCreatePackageSliceSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postCreatePackageSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreatePackage(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    updateCreatePackage(state) {
      state.loading = true;
    },
    updateCreatePackageSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    updateCreatePackageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreatePackageChapter(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getCreatePackageAdminSlice(state) {
      state.loading = true;
    },
    getCreatePackageAdminSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCreatePackageAdminSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getPackageAddOnAdminSlice(state) {
      state.loading = true;
    },
    getPackageAddOnAdminSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPackageAddOnAdminSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCreatePackageAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteCreatePackage(state) {
      state.loading = true;
    },
    deleteCreatePackageSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteCreatePackageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postCreatePackageSlice,
  postCreatePackageSliceSuccess,
  postCreatePackageSliceFailure,
  clearCreatePackage,
  getCreatePackageAdminSlice,
  getCreatePackageAdminSliceSuccess,
  getCreatePackageAdminSliceFailure,
  getPackageAddOnAdminSlice,
  getPackageAddOnAdminSliceSuccess,
  getPackageAddOnAdminSliceFailure,
  clearGetCreatePackageAdmin,
  updateCreatePackage,
  updateCreatePackageSuccess,
  updateCreatePackageFailure,
  deleteCreatePackage,
  deleteCreatePackageSuccess,
  deleteCreatePackageFailure,
} = createPackageSlice.actions;

export default createPackageSlice.reducer;
