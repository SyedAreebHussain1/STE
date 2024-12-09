import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createCompanyUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createCompanyUserType = {
  data: null,
  loading: false,
  error: null,
};

const createCompanyUserSlice = createSlice({
  name: "createUserSlice",
  initialState,
  reducers: {
    createCompanyUser(state) {
      state.loading = true;
    },
    createCompanyUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createCompanyUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteCompanyUser(state) {
      state.loading = true;
    },
    deleteCompanyUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    deleteCompanyUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createCompanyUser,
  createCompanyUserSuccess,
  createCompanyUserFailure,
  deleteCompanyUser,
  deleteCompanyUserSuccess,
  deleteCompanyUserFailure,
} = createCompanyUserSlice.actions;

export default createCompanyUserSlice.reducer;
