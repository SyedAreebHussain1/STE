import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createSystemRole {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createSystemRole = {
  data: null,
  loading: false,
  error: null,
};

const createSystemRoleSlice = createSlice({
  name: "createSystemRole",
  initialState,
  reducers: {
    createSystemRole(state) {
      state.loading = true;
    },
    createSystemRoleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createSystemRoleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createSystemRole, createSystemRoleSuccess, createSystemRoleFailure } =
  createSystemRoleSlice.actions;

export default createSystemRoleSlice.reducer;
