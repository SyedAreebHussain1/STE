import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deletemultipleStaff {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deletemultipleStaff = {
  data: null,
  loading: false,
  error: null,
};

const deletemultipleStaffSlicer = createSlice({
  name: "deletemultipleStaff",
  initialState,
  reducers: {
    deletemultipleStaff(state) {
      state.loading = true;
    },
    deletemultipleStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deletemultipleStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deletemultipleStaff,
  deletemultipleStaffSuccess,
  deletemultipleStaffFailure,
} = deletemultipleStaffSlicer.actions;

export default deletemultipleStaffSlicer.reducer;
