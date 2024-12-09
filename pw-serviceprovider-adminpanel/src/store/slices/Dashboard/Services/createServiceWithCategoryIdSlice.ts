import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateServiceWithCategoryIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateServiceWithCategoryIdType = {
  data: null,
  loading: false,
  error: null,
};

const createServiceWithCategoryIdSlice = createSlice({
  name: "createServiceWithCategoryIdSlice",
  initialState,
  reducers: {
    createServiceWithCategoryId(state) {
      state.loading = true;
    },
    createServiceWithCategoryIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createServiceWithCategoryIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreateServiceWithCategoryId(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createServiceWithCategoryId,
  createServiceWithCategoryIdSuccess,
  createServiceWithCategoryIdFailure,
  clearCreateServiceWithCategoryId,
} = createServiceWithCategoryIdSlice.actions;

export default createServiceWithCategoryIdSlice.reducer;
