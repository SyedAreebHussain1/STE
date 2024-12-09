import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompany {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompany = {
  data: null,
  loading: false,
  error: null,
};

const getCompanySlice = createSlice({
  name: "getCompany",
  initialState,
  reducers: {
    getCompany(state) {
      state.loading = true;
    },
    getCompanySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCompany,
  getCompanySuccess,
  getCompanyFailure,
} = getCompanySlice.actions;

export default getCompanySlice.reducer;
