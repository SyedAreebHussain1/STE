import { createSlice } from "@reduxjs/toolkit";

interface SelectedBusinessPlanState {
  businessPlan: any;
}

const initialState: SelectedBusinessPlanState = {
  businessPlan: null,
};

const SelectedBusinessPlanSlice = createSlice({
  name: "SelectedBusinessPlan",
  initialState,
  reducers: {
    setCurrentSelectedBusinessPlan: (state, action) => {
      state.businessPlan = action.payload;
    },
  },
});

export const { setCurrentSelectedBusinessPlan } =
  SelectedBusinessPlanSlice.actions;

export default SelectedBusinessPlanSlice.reducer;
