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

const getAllUserTransactionsSlice = createSlice({
  name: "getAllUserTransactionsSlice",
  initialState,
  reducers: {
    getAllUserTransactions(state) {
      state.loading = true;
    },
    getAllUserTransactionsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllUserTransactionsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllUserTransactions(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAllUserTransactions,
  getAllUserTransactionsSuccess,
  getAllUserTransactionsFailure,
  clearGetAllUserTransactions,
} = getAllUserTransactionsSlice.actions;

export default getAllUserTransactionsSlice.reducer;
