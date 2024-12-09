import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addNewWithdrawRequest {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addNewWithdrawRequest = {
  data: null,
  loading: false,
  error: null,
};

const addNewWithdrawRequestSlice = createSlice({
  name: "addNewWithdrawRequest",
  initialState,
  reducers: {
    addNewWithdrawRequest(state) {
      state.loading = true;
    },
    addNewWithdrawRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addNewWithdrawRequestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addNewWithdrawRequest,
  addNewWithdrawRequestSuccess,
  addNewWithdrawRequestFailure,
} = addNewWithdrawRequestSlice.actions;

export default addNewWithdrawRequestSlice.reducer;
