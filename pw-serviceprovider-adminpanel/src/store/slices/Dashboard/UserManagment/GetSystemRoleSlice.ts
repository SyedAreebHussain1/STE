import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getSystemRoleType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getSystemRoleType = {
  data: null,
  loading: false,
  error: null,
};

const getSystemRoleSlice = createSlice({
  name: "getSystemRole",
  initialState,
  reducers: {
    getSystemRole(state) {
      state.loading = true;
    },
    getSystemRoleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getSystemRoleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getSystemRole, getSystemRoleSuccess, getSystemRoleFailure } =
  getSystemRoleSlice.actions;

export default getSystemRoleSlice.reducer;
