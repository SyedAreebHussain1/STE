import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deactiveUser {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deactiveUser = {
  data: null,
  loading: false,
  error: null,
};

const deactiveUserSlicer = createSlice({
  name: "deactiveUser",
  initialState,
  reducers: {
    deactiveUser(state) {
      state.loading = true;
    },
    deactiveUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deactiveUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deactiveUser, deactiveUserSuccess, deactiveUserFailure } =
  deactiveUserSlicer.actions;

export default deactiveUserSlicer.reducer;
