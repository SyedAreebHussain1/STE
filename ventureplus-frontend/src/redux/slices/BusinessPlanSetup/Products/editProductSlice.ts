import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editProductType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editProductType = {
  data: null,
  loading: false,
  error: null,
};

const editProductSlice = createSlice({
  name: "editProductSlice",
  initialState,
  reducers: {
    editProduct(state) {
      state.loading = true;
    },
    editProductSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editProductFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editProduct,
  editProductSuccess,
  editProductFailure,
} = editProductSlice.actions;

export default editProductSlice.reducer;
