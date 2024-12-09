import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateStaffingMultipleStaffingType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateStaffingMultipleStaffingType = {
  data: null,
  loading: false,
  error: null,
};

const createStaffingMultipleStaffingSlice = createSlice({
  name: "createStaffingMultipleStaffingSlice",
  initialState,
  reducers: {
    createStaffingMultipleStaffing(state) {
      state.loading = true;
    },
    createStaffingMultipleStaffingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createStaffingMultipleStaffingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createStaffingMultipleStaffing,
  createStaffingMultipleStaffingSuccess,
  createStaffingMultipleStaffingFailure,
} = createStaffingMultipleStaffingSlice.actions;

export default createStaffingMultipleStaffingSlice.reducer;
