import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AgencyReviewVisibility {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AgencyReviewVisibility = {
  data: null,
  loading: false,
  error: null,
};

const agencyReviewVisibilitySlice = createSlice({
  name: "agencyReviewVisibilitySlice",
  initialState,
  reducers: {
    agencyReviewVisibility(state) {
      state.loading = true;
    },
    agencyReviewVisibilitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    agencyReviewVisibilityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  agencyReviewVisibility,
  agencyReviewVisibilitySuccess,
  agencyReviewVisibilityFailure,
} = agencyReviewVisibilitySlice.actions;

export default agencyReviewVisibilitySlice.reducer;
