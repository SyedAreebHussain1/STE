import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProductPromotionById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProductPromotionById = {
  data: null,
  loading: false,
  error: null,
};

const getProductPromotionByIdSlice = createSlice({
  name: "getProductPromotionById",
  initialState,
  reducers: {
    getProductPromotionById(state) {
      state.loading = true;
    },
    getProductPromotionByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProductPromotionByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProductPromotionById,
  getProductPromotionByIdSuccess,
  getProductPromotionByIdFailure,
} = getProductPromotionByIdSlice.actions;

export default getProductPromotionByIdSlice.reducer;
