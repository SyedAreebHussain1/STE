import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllBusinessPlansByBusinessId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllBusinessPlansByBusinessId = {
  data: null,
  loading: false,
  error: null,
};

const getAllBusinessPlansByBusinessIdSlice = createSlice({
  name: "getAllBusinessPlansByBusinessId",
  initialState,
  reducers: {
    getAllBusinessPlansByBusinessId(state) {
      state.loading = true;
    },
    getAllBusinessPlansByBusinessIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllBusinessPlansByBusinessIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearBusinessPlansByBusinessId(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAllBusinessPlansByBusinessId,
  getAllBusinessPlansByBusinessIdSuccess,
  getAllBusinessPlansByBusinessIdFailure,
  clearBusinessPlansByBusinessId,
} = getAllBusinessPlansByBusinessIdSlice.actions;

export default getAllBusinessPlansByBusinessIdSlice.reducer;
