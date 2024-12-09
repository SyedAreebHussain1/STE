import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCurrencies {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCurrencies = {
  data: null,
  loading: false,
  error: null,
};

const getCurrenciesSlice = createSlice({
  name: "getCurrencies",
  initialState,
  reducers: {
    getCurrencies(state) {
      state.loading = true;
    },
    getCurrenciesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCurrenciesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCurrencies,
  getCurrenciesSuccess,
  getCurrenciesFailure,
} = getCurrenciesSlice.actions;

export default getCurrenciesSlice.reducer;
