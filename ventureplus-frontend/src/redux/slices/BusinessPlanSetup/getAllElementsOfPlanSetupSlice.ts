import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllElementsOfPlanSetup {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllElementsOfPlanSetup = {
  data: null,
  loading: false,
  error: null,
};

const getAllElementsOfPlanSetupSlice = createSlice({
  name: "getAllElementsOfPlanSetupSlice",
  initialState,
  reducers: {
    getAllElementsOfPlanSetup(state) {
      state.loading = true;
    },
    getAllElementsOfPlanSetupSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllElementsOfPlanSetupFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllElementsOfPlanSetup,
  getAllElementsOfPlanSetupSuccess,
  getAllElementsOfPlanSetupFailure,
} = getAllElementsOfPlanSetupSlice.actions;

export default getAllElementsOfPlanSetupSlice.reducer;
