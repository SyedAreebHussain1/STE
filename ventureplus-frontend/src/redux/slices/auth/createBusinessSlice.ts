import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createBusinessType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createBusinessType = {
  data: null,
  loading: false,
  error: null,
};

const createBusinessSlice = createSlice({
  name: "createBusiness",
  initialState,
  reducers: {
    createBusiness(state) {
      state.loading = true;
    },
    createBusinessSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createBusinessFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createBusiness, createBusinessSuccess, createBusinessFailure } =
  createBusinessSlice.actions;

export default createBusinessSlice.reducer;
