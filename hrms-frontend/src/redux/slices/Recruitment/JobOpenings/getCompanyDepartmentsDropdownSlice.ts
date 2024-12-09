import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyDepartmentsDropdownType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyDepartmentsDropdownType = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyDepartmentsDropdownSlice = createSlice({
  name: "getCompanyDepartmentsDropdownSlice",
  initialState,
  reducers: {
    getCompanyDepartmentsDropdown(state) {
      state.loading = true;
    },
    getCompanyDepartmentsDropdownSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyDepartmentsDropdownFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanyDepartmentsDropdown,
  getCompanyDepartmentsDropdownSuccess,
  getCompanyDepartmentsDropdownFailure,
} = getCompanyDepartmentsDropdownSlice.actions;

export default getCompanyDepartmentsDropdownSlice.reducer;
