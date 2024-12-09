import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllStaff {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllStaff = {
  data: null,
  loading: false,
  error: null,
};

const getAllStaffSlicer = createSlice({
  name: "getAllStaff",
  initialState,
  reducers: {
    getAllStaff(state) {
      state.loading = true;
    },
    getAllStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllStaff, getAllStaffSuccess, getAllStaffFailure } =
  getAllStaffSlicer.actions;

export default getAllStaffSlicer.reducer;
