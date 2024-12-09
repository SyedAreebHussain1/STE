import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyUserDeleteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyUserDeleteType = {
  data: null,
  loading: false,
  error: null,
};

const companyUserDeleteSlice = createSlice({
  name: "companyUserDeleteSlice",
  initialState,
  reducers: {
    companyUserDelete(state) {
      state.loading = true;
    },
    companyUserDeleteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    companyUserDeleteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  companyUserDelete,
  companyUserDeleteSuccess,
  companyUserDeleteFailure,
} = companyUserDeleteSlice.actions;

export default companyUserDeleteSlice.reducer;
