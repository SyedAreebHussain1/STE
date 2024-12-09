import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllProjectInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllProjectInventory = {
  data: null,
  loading: false,
  error: null,
};

const getAllProjectInventorySlice = createSlice({
  name: "getAllProjectInventorySlice",
  initialState,
  reducers: {
    getAllProjectInventory(state) {
      state.loading = true;
    },
    getAllProjectInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllProjectInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllProjectInventory,
  getAllProjectInventorySuccess,
  getAllProjectInventoryFailure,
} = getAllProjectInventorySlice.actions;

export default getAllProjectInventorySlice.reducer;
