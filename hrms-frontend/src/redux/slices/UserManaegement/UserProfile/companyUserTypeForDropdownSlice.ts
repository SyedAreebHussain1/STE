import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyUserTypeForDropdownType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyUserTypeForDropdownType = {
  data: null,
  loading: false,
  error: null,
};

const companyUserTypeForDropdownSlice = createSlice({
  name: "companyUserTypeForDropdownSlice",
  initialState,
  reducers: {
    companyUserTypeForDropdown(state) {
      state.loading = true;
    },
    companyUserTypeForDropdownSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    companyUserTypeForDropdownFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
        companyUserTypeForDropdown,
        companyUserTypeForDropdownSuccess,
        companyUserTypeForDropdownFailure,
} = companyUserTypeForDropdownSlice.actions;

export default companyUserTypeForDropdownSlice.reducer;
