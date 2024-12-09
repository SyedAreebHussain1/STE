import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAssignLeadForInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAssignLeadForInventory = {
  data: null,
  loading: false,
  error: null,
};

const getAssignLeadForInventorySlice = createSlice({
  name: "getAssignLeadForInventory",
  initialState,
  reducers: {
    getAssignLeadForInventory(state) {
      state.loading = true;
    },
    getAssignLeadForInventorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAssignLeadForInventoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAssignLeadForInventory,
  getAssignLeadForInventorySuccess,
  getAssignLeadForInventoryFailure,
} = getAssignLeadForInventorySlice.actions;

export default getAssignLeadForInventorySlice.reducer;
