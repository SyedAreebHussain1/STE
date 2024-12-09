import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AssignInventoryType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AssignInventoryType = {
  data: null,
  loading: false,
  error: null,
};

const assignInventorySlice = createSlice({
  name: "assignInventorySlice",
  initialState,
  reducers: {
    assignInventory(state) {
      state.loading = true;
    },
    assignInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    assignInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  assignInventory,
  assignInventorySuccess,
  assignInventoryFailure,
} = assignInventorySlice.actions;

export default assignInventorySlice.reducer;
