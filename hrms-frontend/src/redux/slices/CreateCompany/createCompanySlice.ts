import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createCompany {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createCompany = {
  data: null,
  loading: false,
  error: null,
};

const createCompanySlice = createSlice({
  name: "createCompany",
  initialState,
  reducers: {
    createCompany(state) {
      state.loading = true;
    },
    createCompanySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createCompanyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createCompany, createCompanySuccess, createCompanyFailure } =
  createCompanySlice.actions;

export default createCompanySlice.reducer;
