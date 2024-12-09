import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const updateDepartmentSlice = createSlice({
  name: "updateDepartmentSlice",
  initialState,
  reducers: {
    updateDepartment(state) {
      state.loading = true;
    },
    updateDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} = updateDepartmentSlice.actions;

export default updateDepartmentSlice.reducer;
