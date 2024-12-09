import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createProductType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createProductType = {
  data: null,
  loading: false,
  error: null,
};

const createProductSlice = createSlice({
  name: "createProductSlice",
  initialState,
  reducers: {
    createProduct(state) {
      state.loading = true;
    },
    createProductSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createProductFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createProduct,
  createProductSuccess,
  createProductFailure,
} = createProductSlice.actions;

export default createProductSlice.reducer;
