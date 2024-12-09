import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyUserById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyUserById = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyUserByIdSlice = createSlice({
  name: "getCompanyUserById",
  initialState,
  reducers: {
    getCompanyUserById(state) {
      state.loading = true;
    },
    getCompanyUserByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyUserByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanyUserById,
  getCompanyUserByIdSuccess,
  getCompanyUserByIdFailure,
} = getCompanyUserByIdSlice.actions;

export default getCompanyUserByIdSlice.reducer;
