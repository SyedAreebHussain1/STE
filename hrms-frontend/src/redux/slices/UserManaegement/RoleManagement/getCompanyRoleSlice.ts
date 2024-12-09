import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyRoleType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyRoleType = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyRoleSlice = createSlice({
  name: "getCompanyRoleSlice",
  initialState,
  reducers: {
    getCompanyRole(state) {
      state.loading = true;
    },
    getCompanyRoleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyRoleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getCompanyRole,
    getCompanyRoleSuccess,
    getCompanyRoleFailure,
} = getCompanyRoleSlice.actions;
export default getCompanyRoleSlice.reducer;
