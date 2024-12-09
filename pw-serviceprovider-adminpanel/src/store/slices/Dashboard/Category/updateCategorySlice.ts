import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateCategoryType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateCategoryType = {
  data: null,
  loading: false,
  error: null,
};

const updateCategorySlice = createSlice({
  name: "updateCategorySlice",
  initialState,
  reducers: {
    updateCategory(state) {
      state.loading = true;
    },
    updateCategorySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateCategoryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateCategory(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateCategory,
  updateCategorySuccess,
  updateCategoryFailure,
  clearUpdateCategory,
} = updateCategorySlice.actions;

export default updateCategorySlice.reducer;
