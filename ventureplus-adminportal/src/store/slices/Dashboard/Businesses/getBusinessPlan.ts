import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessPlanType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessPlanType = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessPlanSlice = createSlice({
  name: "getBusinessPlanSlice",
  initialState,
  reducers: {
    getBusinessPlan(state) {
      state.loading = true;
    },
    getBusinessPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getBusinessPlan, getBusinessPlanSuccess, getBusinessPlanFailure } =
  getBusinessPlanSlice.actions;

export default getBusinessPlanSlice.reducer;
