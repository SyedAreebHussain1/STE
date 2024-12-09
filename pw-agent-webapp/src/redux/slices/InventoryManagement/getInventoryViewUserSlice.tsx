import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getInventoryViewUser {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getInventoryViewUser = {
  data: null,
  loading: false,
  error: null,
};

const getInventoryViewUserSlice = createSlice({
  name: "getInventoryViewUser",
  initialState,
  reducers: {
    getInventoryViewUser(state) {
      state.loading = true;
    },
    getInventoryViewUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getInventoryViewUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getInventoryViewUser,
  getInventoryViewUserSuccess,
  getInventoryViewUserFailure,
} = getInventoryViewUserSlice.actions;

export default getInventoryViewUserSlice.reducer;
