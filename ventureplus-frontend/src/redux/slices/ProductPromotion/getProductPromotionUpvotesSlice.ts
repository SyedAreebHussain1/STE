import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProductPromotionUpvotes {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProductPromotionUpvotes = {
  data: null,
  loading: false,
  error: null,
};

const getProductPromotionUpvotesSlice = createSlice({
  name: "getProductPromotionUpvotes",
  initialState,
  reducers: {
    getProductPromotionUpvotes(state) {
      state.loading = true;
    },
    getProductPromotionUpvotesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProductPromotionUpvotesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProductPromotionUpvotes,
  getProductPromotionUpvotesSuccess,
  getProductPromotionUpvotesFailure,
} = getProductPromotionUpvotesSlice.actions;

export default getProductPromotionUpvotesSlice.reducer;
