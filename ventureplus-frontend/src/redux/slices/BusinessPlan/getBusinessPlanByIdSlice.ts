import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessPlanById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessPlanById = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessPlanByIdSlice = createSlice({
  name: "getBusinessPlanById",
  initialState,
  reducers: {
    getBusinessPlanById(state) {
      state.loading = true;
    },
    getBusinessPlanByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessPlanByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessPlanById,
  getBusinessPlanByIdSuccess,
  getBusinessPlanByIdFailure,
} = getBusinessPlanByIdSlice.actions;

export default getBusinessPlanByIdSlice.reducer;
