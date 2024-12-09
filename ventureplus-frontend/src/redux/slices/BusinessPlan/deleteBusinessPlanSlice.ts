import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteBusinessPlanType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteBusinessPlanType = {
  data: null,
  loading: false,
  error: null,
};

const deleteBusinessPlanSlice = createSlice({
  name: "deleteBusinessPlanSlice",
  initialState,
  reducers: {
    deleteBusinessPlan(state) {
      state.loading = true;
    },
    deleteBusinessPlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteBusinessPlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteBusinessPlan,
  deleteBusinessPlanSuccess,
  deleteBusinessPlanFailure,
} = deleteBusinessPlanSlice.actions;

export default deleteBusinessPlanSlice.reducer;
