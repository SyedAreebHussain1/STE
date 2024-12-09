import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllStaffByPlanId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllStaffByPlanId = {
  data: null,
  loading: false,
  error: null,
};

const getAllStaffByPlanIdSlice = createSlice({
  name: "getAllStaffByPlanIdSlice",
  initialState,
  reducers: {
    getAllStaffByPlanId(state) {
      state.loading = true;
    },
    getAllStaffByPlanIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllStaffByPlanIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllStaffByPlanId,
  getAllStaffByPlanIdSuccess,
  getAllStaffByPlanIdFailure,
} = getAllStaffByPlanIdSlice.actions;

export default getAllStaffByPlanIdSlice.reducer;
