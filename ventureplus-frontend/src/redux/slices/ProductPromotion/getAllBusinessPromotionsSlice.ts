import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllBusinessPromotionsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllBusinessPromotionsType = {
  data: null,
  loading: false,
  error: null,
};

const getAllBusinessPromotionsSlice = createSlice({
  name: "getAllBusinessPromotions",
  initialState,
  reducers: {
    getAllBusinessPromotions(state) {
      state.loading = true;
    },
    getAllBusinessPromotionsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllBusinessPromotionsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllBusinessPromotions,
  getAllBusinessPromotionsSuccess,
  getAllBusinessPromotionsFailure,
} = getAllBusinessPromotionsSlice.actions;

export default getAllBusinessPromotionsSlice.reducer;
