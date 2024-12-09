import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateSystemUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateSystemUserType = {
  data: null,
  loading: false,
  error: null,
};

const updateSystemUserSlice = createSlice({
  name: "updateSystemUser",
  initialState,
  reducers: {
    updateSystemUser(state) {
      state.loading = true;
    },
    updateSystemUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateSystemUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateSystemUser,
  updateSystemUserSuccess,
  updateSystemUserFailure,
} = updateSystemUserSlice.actions;

export default updateSystemUserSlice.reducer;
