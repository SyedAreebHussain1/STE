import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createStaffType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createStaffType = {
  data: null,
  loading: false,
  error: null,
};

const createStaffSlice = createSlice({
  name: "createStaffSlice",
  initialState,
  reducers: {
    createStaff(state) {
      state.loading = true;
    },
    createStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createStaff,
  createStaffSuccess,
  createStaffFailure,
} = createStaffSlice.actions;

export default createStaffSlice.reducer;
