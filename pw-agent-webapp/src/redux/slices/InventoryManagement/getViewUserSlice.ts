import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getViewUser {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getViewUser = {
  data: null,
  loading: false,
  error: null,
};

const getViewUserSlice = createSlice({
  name: "getViewUser",
  initialState,
  reducers: {
    getViewUser(state) {
      state.loading = true;
    },
    getViewUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getViewUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getViewUser, getViewUserSuccess, getViewUserFailure } =
  getViewUserSlice.actions;

export default getViewUserSlice.reducer;
