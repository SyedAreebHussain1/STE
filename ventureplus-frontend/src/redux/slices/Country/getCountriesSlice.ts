import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCountries {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCountries = {
  data: null,
  loading: false,
  error: null,
};

const getCountriesSlice = createSlice({
  name: "getCountries",
  initialState,
  reducers: {
    getCountries(state) {
      state.loading = true;
    },
    getCountriesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCountriesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getCountries, getCountriesSuccess, getCountriesFailure } =
  getCountriesSlice.actions;

export default getCountriesSlice.reducer;
