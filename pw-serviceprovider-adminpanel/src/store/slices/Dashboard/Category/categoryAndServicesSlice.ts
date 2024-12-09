import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryAndServicesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryAndServicesType = {
  data: null,
  loading: false,
  error: null,
};

const categoryAndServicesSlice = createSlice({
  name: "categoryAndServicesSlice",
  initialState,
  reducers: {
    categoryAndServices(state) {
      state.loading = true;
    },
    categoryAndServicesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    categoryAndServicesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCategoryAndServices(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  categoryAndServices,
  categoryAndServicesSuccess,
  categoryAndServicesFailure,
  clearCategoryAndServices,
} = categoryAndServicesSlice.actions;

export default categoryAndServicesSlice.reducer;
