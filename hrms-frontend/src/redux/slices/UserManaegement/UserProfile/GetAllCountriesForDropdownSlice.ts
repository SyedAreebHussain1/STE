import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCountriesForDropdownType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCountriesForDropdownType = {
  data: null,
  loading: false,
  error: null,
};

const GetAllCountriesForDropdownSlice = createSlice({
  name: "GetAllCountriesForDropdownSlice",
  initialState,
  reducers: {
    GetAllCountriesForDropdown(state) {
      state.loading = true;
    },
    GetAllCountriesForDropdownSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    GetAllCountriesForDropdownFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  GetAllCountriesForDropdown,
  GetAllCountriesForDropdownSuccess,
  GetAllCountriesForDropdownFailure,
} = GetAllCountriesForDropdownSlice.actions;

export default GetAllCountriesForDropdownSlice.reducer;
