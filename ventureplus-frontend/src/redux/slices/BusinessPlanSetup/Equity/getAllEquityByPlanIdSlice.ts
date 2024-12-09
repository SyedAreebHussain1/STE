import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllEquityByPlanId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllEquityByPlanId = {
  data: null,
  loading: false,
  error: null,
};

const getAllEquityByPlanIdSlice = createSlice({
  name: "getAllEquityByPlanIdSlice",
  initialState,
  reducers: {
    getAllEquityByPlanId(state) {
      state.loading = true;
    },
    getAllEquityByPlanIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllEquityByPlanIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllEquityByPlanId,
  getAllEquityByPlanIdSuccess,
  getAllEquityByPlanIdFailure,
} = getAllEquityByPlanIdSlice.actions;

export default getAllEquityByPlanIdSlice.reducer;
