import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getPropertiesInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getPropertiesInventory = {
  data: null,
  loading: false,
  error: null,
};

const getPropertiesInventorySlice = createSlice({
  name: "getPropertiesInventory",
  initialState,
  reducers: {
    getPropertiesInventory(state) {
      state.loading = true;
    },
    getPropertiesInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPropertiesInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPropertiesInventory,
  getPropertiesInventorySuccess,
  getPropertiesInventoryFailure,
} = getPropertiesInventorySlice.actions;

export default getPropertiesInventorySlice.reducer;
