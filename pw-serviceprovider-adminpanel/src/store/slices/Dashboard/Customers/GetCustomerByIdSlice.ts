import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCustomerByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCustomerByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getCustomerByIdSlice = createSlice({
  name: "getCustomerById",
  initialState,
  reducers: {
    getCustomerById(state) {
      state.loading = true;
    },
    getCustomerByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCustomerByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCustomerById,
  getCustomerByIdSuccess,
  getCustomerByIdFailure,
} = getCustomerByIdSlice.actions;

export default getCustomerByIdSlice.reducer;
