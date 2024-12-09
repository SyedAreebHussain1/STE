import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCompanyUserSliceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCompanyUserSliceType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCompanyUserSlice = createSlice({
  name: "getAllCompanyUserSlice",
  initialState,
  reducers: {
    getAllCompanyUser(state) {
      state.loading = true;
    },
    getAllCompanyUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCompanyUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCompanyUser,
  getAllCompanyUserSuccess,
  getAllCompanyUserFailure,
} = getAllCompanyUserSlice.actions;

export default getAllCompanyUserSlice.reducer;
