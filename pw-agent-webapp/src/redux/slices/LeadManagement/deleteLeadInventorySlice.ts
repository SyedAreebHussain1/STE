import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteLeadInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteLeadInventory = {
  data: null,
  loading: false,
  error: null,
};

const deleteLeadInventorySlice = createSlice({
  name: "deleteLeadInventorySlice",
  initialState,
  reducers: {
    deleteLeadInventory(state) {
      state.loading = true;
    },
    deleteLeadInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteLeadInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteLeadInventory,
  deleteLeadInventorySuccess,
  deleteLeadInventoryFailure,
} = deleteLeadInventorySlice.actions;

export default deleteLeadInventorySlice.reducer;
