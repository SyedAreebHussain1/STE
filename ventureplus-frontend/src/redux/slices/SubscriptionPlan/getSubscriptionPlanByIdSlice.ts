import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getSubscriptionPlanById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getSubscriptionPlanById = {
  data: null,
  loading: false,
  error: null,
};

const getSubscriptionPlanByIdSlice = createSlice({
  name: "getSubscriptionPlanByIdSlice",
  initialState,
  reducers: {
    getSubscriptionPlanById(state) {
      state.loading = true;
    },
    getSubscriptionPlanByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getSubscriptionPlanByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetSubscriptionPlanById(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getSubscriptionPlanById,
  getSubscriptionPlanByIdSuccess,
  getSubscriptionPlanByIdFailure,
  cleargetSubscriptionPlanById,
} = getSubscriptionPlanByIdSlice.actions;

export default getSubscriptionPlanByIdSlice.reducer;
