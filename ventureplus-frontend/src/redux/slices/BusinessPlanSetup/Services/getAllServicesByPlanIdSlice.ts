import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllServicesByPlanId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllServicesByPlanId = {
  data: null,
  loading: false,
  error: null,
};

const getAllServicesByPlanIdSlice = createSlice({
  name: "getAllServicesByPlanIdSlice",
  initialState,
  reducers: {
    getAllServicesByPlanId(state) {
      state.loading = true;
    },
    getAllServicesByPlanIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllServicesByPlanIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllServicesByPlanId,
  getAllServicesByPlanIdSuccess,
  getAllServicesByPlanIdFailure,
} = getAllServicesByPlanIdSlice.actions;

export default getAllServicesByPlanIdSlice.reducer;
