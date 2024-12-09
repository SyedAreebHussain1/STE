import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateUserPasswordType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateUserPasswordType = {
  data: null,
  loading: false,
  error: null,
};

const updateUserPasswordSlice = createSlice({
  name: "updateUserPasswordSlice",
  initialState,
  reducers: {
    updateUserPassword(state) {
      state.loading = true;
    },
    updateUserPasswordSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserPasswordFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserPassword,
  updateUserPasswordSuccess,
  updateUserPasswordFailure,
} = updateUserPasswordSlice.actions;

export default updateUserPasswordSlice.reducer;
