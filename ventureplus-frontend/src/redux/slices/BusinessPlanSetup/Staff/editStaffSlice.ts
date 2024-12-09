import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editStaffType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editStaffType = {
  data: null,
  loading: false,
  error: null,
};

const editStaffSlice = createSlice({
  name: "editStaffSlice",
  initialState,
  reducers: {
    editStaff(state) {
      state.loading = true;
    },
    editStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editStaff,
  editStaffSuccess,
  editStaffFailure,
} = editStaffSlice.actions;

export default editStaffSlice.reducer;
