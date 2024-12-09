import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetServiceProviderRatingType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetServiceProviderRatingType = {
  data: null,
  loading: false,
  error: null,
};

const getServiceProviderRatingSlice = createSlice({
  name: "getServiceProviderRatingSlice",
  initialState,
  reducers: {
    getServiceProviderRating(state) {
      state.loading = true;
    },
    getServiceProviderRatingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getServiceProviderRatingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getServiceProviderRating,
  getServiceProviderRatingSuccess,
  getServiceProviderRatingFailure,
} = getServiceProviderRatingSlice.actions;

export default getServiceProviderRatingSlice.reducer;
