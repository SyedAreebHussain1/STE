import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProductPromotionsByBusinessIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProductPromotionsByBusinessIdType = {
  data: null,
  loading: false,
  error: null,
};

const getProductPromotionsByBusinessIdSlice = createSlice({
  name: "getProductPromotionsByBusinessIdSlice",
  initialState,
  reducers: {
    getProductPromotionsByBusinessId(state) {
      state.loading = true;
    },
    getProductPromotionsByBusinessIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProductPromotionsByBusinessIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProductPromotionsByBusinessId,
  getProductPromotionsByBusinessIdSuccess,
  getProductPromotionsByBusinessIdFailure,
} = getProductPromotionsByBusinessIdSlice.actions;

export default getProductPromotionsByBusinessIdSlice.reducer;
