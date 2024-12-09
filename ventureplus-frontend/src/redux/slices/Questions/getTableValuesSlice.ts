import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetTableValues {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTableValues = {
  data: null,
  loading: false,
  error: null,
};

const getTableValuesSlice = createSlice({
  name: "getTableValuesSlice",
  initialState,
  reducers: {
    getTableValues(state) {
      state.loading = true;
    },
    getTableValuesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTableValuesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTableValues(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getTableValues,
  getTableValuesSuccess,
  getTableValuesFailure,
  clearGetTableValues,
} = getTableValuesSlice.actions;

export default getTableValuesSlice.reducer;
