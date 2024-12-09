import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface checkOutType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: checkOutType = {
  data: null,
  loading: false,
  error: null,
};

const checkOutSlice = createSlice({
  name: "checkOutSlice",
  initialState,
  reducers: {
    checkOut(state) {
      state.loading = true;
    },
    checkOutSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    checkOutFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    checkOut,
    checkOutSuccess,
    checkOutFailure,
} = checkOutSlice.actions;

export default checkOutSlice.reducer;
