import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetBusinessPlanInfo {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetBusinessPlanInfo = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessPlanInfoSlice = createSlice({
  name: "getBusinessPlanInfo",
  initialState,
  reducers: {
    getBusinessPlanInfo(state) {
      state.loading = true;
    },
    getBusinessPlanInfoSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessPlanInfoFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessPlanInfo,
  getBusinessPlanInfoSuccess,
  getBusinessPlanInfoFailure,
} = getBusinessPlanInfoSlice.actions;

export default getBusinessPlanInfoSlice.reducer;
