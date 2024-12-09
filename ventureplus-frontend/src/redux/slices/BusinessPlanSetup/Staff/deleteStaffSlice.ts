import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteStaffType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteStaffType = {
  data: null,
  loading: false,
  error: null,
};

const deleteStaffSlice = createSlice({
  name: "deleteStaffSlice",
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
  deleteStaffSlice.actions;

export default deleteStaffSlice.reducer;
