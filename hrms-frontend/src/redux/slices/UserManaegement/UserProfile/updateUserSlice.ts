import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateUserType = {
  data: null,
  loading: false,
  error: null,
};

const updateUserSlice = createSlice({
  name: "updateUserSlice",
  initialState,
  reducers: {
    updateUser(state) {
      state.loading = true;
    },
    updateUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateUser,
  updateUserSuccess,
  updateUserFailure,
} = updateUserSlice.actions;

export default updateUserSlice.reducer;
