import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getRemainingCreditsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getRemainingCreditsType = {
  data: null,
  loading: false,
  error: null,
};

const getRemainingCreditsSlice = createSlice({
  name: "getRemainingCreditsSlice",
  initialState,
  reducers: {
    getRemainingCredits(state) {
      state.loading = true;
    },
    getRemainingCreditsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getRemainingCreditsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetRemainingCredits(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getRemainingCredits,
  getRemainingCreditsSuccess,
  getRemainingCreditsFailure,
  cleargetRemainingCredits,
} = getRemainingCreditsSlice.actions;

export default getRemainingCreditsSlice.reducer;
