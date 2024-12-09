import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editphotoForInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editphotoForInventory = {
  data: null,
  loading: false,
  error: null,
};

const editphotoForInventorySlice = createSlice({
  name: "editphotoForInventory",
  initialState,
  reducers: {
    editphotoForInventory(state) {
      state.loading = true;
    },
    editphotoForInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editphotoForInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editphotoForInventory,
  editphotoForInventorySuccess,
  editphotoForInventoryFailure,
} = editphotoForInventorySlice.actions;

export default editphotoForInventorySlice.reducer;
