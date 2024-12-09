import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetSubscriptionPlan {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetSubscriptionPlan = {
  data: null,
  loading: false,
  error: null,
};

const getSubscriptionPlanSlice = createSlice({
  name: "getSubscriptionPlanSlice",
  initialState,
  reducers: {
    getSubscriptionPlan(state) {
      state.loading = true;
    },
    getSubscriptionPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getSubscriptionPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    cleargetSubscriptionPlan(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getSubscriptionPlan,
  getSubscriptionPlanSuccess,
  getSubscriptionPlanFailure,
  cleargetSubscriptionPlan,
} = getSubscriptionPlanSlice.actions;

export default getSubscriptionPlanSlice.reducer;
