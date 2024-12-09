import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteProductPhotoType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteProductPhotoType = {
  data: null,
  loading: false,
  error: null,
};

const deleteProductPhotoSlice = createSlice({
  name: "deleteProductPhotoSlice",
  initialState,
  reducers: {
    deleteProductPhoto(state) {
      state.loading = true;
    },
    deleteProductPhotoSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteProductPhotoFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteProductPhoto,
  deleteProductPhotoSuccess,
  deleteProductPhotoFailure,
} = deleteProductPhotoSlice.actions;

export default deleteProductPhotoSlice.reducer;
