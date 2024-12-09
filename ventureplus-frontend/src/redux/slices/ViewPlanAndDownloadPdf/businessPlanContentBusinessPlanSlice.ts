import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BusinessPlanContentBusinessPlan {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: BusinessPlanContentBusinessPlan = {
  data: null,
  loading: false,
  error: null,
};

const businessPlanContentBusinessPlanSlice = createSlice({
  name: "businessPlanContentBusinessPlanSlice",
  initialState,
  reducers: {
    businessPlanContentBusinessPlan(state) {
      state.loading = true;
    },
    businessPlanContentBusinessPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    businessPlanContentBusinessPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearBusinessPlanContentBusinessPlan(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  businessPlanContentBusinessPlan,
  businessPlanContentBusinessPlanSuccess,
  businessPlanContentBusinessPlanFailure,
  clearBusinessPlanContentBusinessPlan,
} = businessPlanContentBusinessPlanSlice.actions;

export default businessPlanContentBusinessPlanSlice.reducer;
