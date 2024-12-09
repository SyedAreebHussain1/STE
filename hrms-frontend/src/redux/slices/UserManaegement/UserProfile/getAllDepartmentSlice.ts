import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllDepartment {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllDepartment = {
  data: null,
  loading: false,
  error: null,
};

const getAllDepartmentSlice = createSlice({
  name: "getAllDepartmentSlice",
  initialState,
  reducers: {
    getAllDepartment(state) {
      state.loading = true;
    },
    getAllDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllDepartment,
  getAllDepartmentSuccess,
  getAllDepartmentFailure,
} = getAllDepartmentSlice.actions;

export default getAllDepartmentSlice.reducer;
