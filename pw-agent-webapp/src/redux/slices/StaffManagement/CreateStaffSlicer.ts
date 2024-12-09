import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateStaff {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateStaff = {
  data: null,
  loading: false,
  error: null,
};

const CreateStaffSlicer = createSlice({
  name: "CreateStaff",
  initialState,
  reducers: {
    CreateStaff(state) {
      state.loading = true;
    },
    CreateStaffSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    CreateStaffFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { CreateStaff, CreateStaffSuccess, CreateStaffFailure } =
  CreateStaffSlicer.actions;

export default CreateStaffSlicer.reducer;
