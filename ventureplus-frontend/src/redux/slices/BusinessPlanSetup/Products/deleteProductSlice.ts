import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteProductType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteProductType = {
  data: null,
  loading: false,
  error: null,
};

const deleteProductSlice = createSlice({
  name: "deleteProductSlice",
  initialState,
  reducers: {
    deleteProduct(state) {
      state.loading = true;
    },
    deleteProductSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteProductFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteProduct, deleteProductSuccess, deleteProductFailure } =
  deleteProductSlice.actions;

export default deleteProductSlice.reducer;
