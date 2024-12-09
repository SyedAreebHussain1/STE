import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCustomerRatingType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCustomerRatingType = {
  data: null,
  loading: false,
  error: null,
};

const getCustomerRatingSlice = createSlice({
  name: "getCustomerRatingSlice",
  initialState,
  reducers: {
    getCustomerRating(state) {
      state.loading = true;
    },
    getCustomerRatingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCustomerRatingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCustomerRating,
  getCustomerRatingSuccess,
  getCustomerRatingFailure,
} = getCustomerRatingSlice.actions;

export default getCustomerRatingSlice.reducer;
