import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateCompanyRole {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateCompanyRole = {
  data: null,
  loading: false,
  error: null,
};

const createCompanyRoleSlice = createSlice({
  name: "createCompanyRoleSlice",
  initialState,
  reducers: {
    createCompanyRole(state) {
      state.loading = true;
    },
    createCompanyRoleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createCompanyRoleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createCompanyRole, createCompanyRoleSuccess, createCompanyRoleFailure } =
createCompanyRoleSlice.actions;

export default createCompanyRoleSlice.reducer;
