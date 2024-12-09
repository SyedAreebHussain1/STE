import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllProductsByPlanId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllProductsByPlanId = {
  data: null,
  loading: false,
  error: null,
};

const getAllProductsByPlanIdSlice = createSlice({
  name: "getAllProductsByPlanIdSlice",
  initialState,
  reducers: {
    getAllProductsByPlanId(state) {
      state.loading = true;
    },
    getAllProductsByPlanIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllProductsByPlanIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllProductsByPlanId,
  getAllProductsByPlanIdSuccess,
  getAllProductsByPlanIdFailure,
} = getAllProductsByPlanIdSlice.actions;

export default getAllProductsByPlanIdSlice.reducer;
