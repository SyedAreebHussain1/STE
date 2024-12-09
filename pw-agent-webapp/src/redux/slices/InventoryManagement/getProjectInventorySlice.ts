import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectInventory = {
  data: null,
  loading: false,
  error: null,
};

const getProjectInventorySlice = createSlice({
  name: "getProjectInventory",
  initialState,
  reducers: {
    getProjectInventory(state) {
      state.loading = true;
    },
    getProjectInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectInventory,
  getProjectInventorySuccess,
  getProjectInventoryFailure,
} = getProjectInventorySlice.actions;

export default getProjectInventorySlice.reducer;
