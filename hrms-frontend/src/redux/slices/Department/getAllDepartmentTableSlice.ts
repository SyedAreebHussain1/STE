import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const getAllDepartmentTableSlice = createSlice({
  name: "getAllDepartmentTableSlice",
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
} = getAllDepartmentTableSlice.actions;

export default getAllDepartmentTableSlice.reducer;
