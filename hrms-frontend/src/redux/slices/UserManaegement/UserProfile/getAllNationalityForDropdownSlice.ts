import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllNationalityForDropdownType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllNationalityForDropdownType = {
  data: null,
  loading: false,
  error: null,
};

const getAllNationalityForDropdownSlice = createSlice({
  name: "getAllNationalityForDropdownSlice",
  initialState,
  reducers: {
    getAllNationalityForDropdown(state) {
      state.loading = true;
    },
    getAllNationalityForDropdownSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllNationalityForDropdownFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
        getAllNationalityForDropdown,
        getAllNationalityForDropdownSuccess,
        getAllNationalityForDropdownFailure,
} = getAllNationalityForDropdownSlice.actions;

export default getAllNationalityForDropdownSlice.reducer;
