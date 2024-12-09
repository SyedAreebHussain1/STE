import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createBusinessPlanType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createBusinessPlanType = {
  data: null,
  loading: false,
  error: null,
};

const createBusinessPlanSlice = createSlice({
  name: "createBusinessPlanSlice",
  initialState,
  reducers: {
    createBusinessPlan(state) {
      state.loading = true;
    },
    createBusinessPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createBusinessPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    updateBusinessPlan(state) {
      state.loading = true;
    },
    updateBusinessPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateBusinessPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createBusinessPlan,
  createBusinessPlanSuccess,
  createBusinessPlanFailure,
  updateBusinessPlan,
  updateBusinessPlanSuccess,
  updateBusinessPlanFailure,
} = createBusinessPlanSlice.actions;

export default createBusinessPlanSlice.reducer;
