import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCategoriesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCategoriesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCategoriesSlice = createSlice({
  name: "getAllCategoriesSlice",
  initialState,
  reducers: {
    getAllCategories(state) {
      state.loading = true;
    },
    getAllCategoriesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCategoriesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllCategories(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCategories,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  clearGetAllCategories,
} = getAllCategoriesSlice.actions;

export default getAllCategoriesSlice.reducer;
