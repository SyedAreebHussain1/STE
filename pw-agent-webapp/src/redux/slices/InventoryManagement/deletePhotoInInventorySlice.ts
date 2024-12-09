import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deletePhotoInInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deletePhotoInInventory = {
  data: null,
  loading: false,
  error: null,
};

const deletePhotoInInventorySlice = createSlice({
  name: "deletePhotoInInventory",
  initialState,
  reducers: {
    deletePhotoInInventory(state) {
      state.loading = true;
    },
    deletePhotoInInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deletePhotoInInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deletePhotoInInventory,
  deletePhotoInInventorySuccess,
  deletePhotoInInventoryFailure,
} = deletePhotoInInventorySlice.actions;

export default deletePhotoInInventorySlice.reducer;
