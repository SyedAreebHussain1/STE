import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteStaff {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteStaff = {
  data: null,
  loading: false,
  error: null,
};

const deleteStaffSlicer = createSlice({
  name: "deleteStaff",
  initialState,
  reducers: {
    deleteStaff(state) {
      state.loading = true;
    },
    deleteStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteStaff, deleteStaffSuccess, deleteStaffFailure } =
  deleteStaffSlicer.actions;

export default deleteStaffSlicer.reducer;
