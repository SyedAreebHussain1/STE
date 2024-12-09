import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProductById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProductById = {
  data: null,
  loading: false,
  error: null,
};

const getProductByIdSlice = createSlice({
  name: "getProductByIdSlice",
  initialState,
  reducers: {
    getProductById(state) {
      state.loading = true;
    },
    getProductByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProductByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProductById,
  getProductByIdSuccess,
  getProductByIdFailure,
} = getProductByIdSlice.actions;

export default getProductByIdSlice.reducer;
