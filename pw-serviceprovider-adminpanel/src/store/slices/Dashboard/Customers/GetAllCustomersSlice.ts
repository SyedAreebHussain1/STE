import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllCustomersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllCustomersType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCustomersSlice = createSlice({
  name: "getAllCustomers",
  initialState,
  reducers: {
    getAllCustomers(state) {
      state.loading = true;
    },
    getAllCustomersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCustomersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCustomers,
  getAllCustomersSuccess,
  getAllCustomersFailure,
} = getAllCustomersSlice.actions;

export default getAllCustomersSlice.reducer;
