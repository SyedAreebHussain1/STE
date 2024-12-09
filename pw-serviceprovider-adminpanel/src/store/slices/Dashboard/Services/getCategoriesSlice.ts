import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCategoriesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCategoriesType = {
  data: null,
  loading: false,
  error: null,
};

const getCategoriesSlice = createSlice({
  name: "getCategoriesSlice",
  initialState,
  reducers: {
    getCategories(state) {
      state.loading = true;
    },
    getCategoriesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCategoriesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCategories(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
  clearGetCategories,
} = getCategoriesSlice.actions;

export default getCategoriesSlice.reducer;
