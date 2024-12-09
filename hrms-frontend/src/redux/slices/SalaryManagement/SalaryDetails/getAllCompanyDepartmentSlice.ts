import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllCompanyDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllCompanyDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCompanyDepartmentSlice = createSlice({
  name: "getAllCompanyDepartmentSlice",
  initialState,
  reducers: {
    getAllCompanyDepartment(state) {
      state.loading = true;
    },
    getAllCompanyDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCompanyDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllCompanyDepartment(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCompanyDepartment,
  getAllCompanyDepartmentSuccess,
  getAllCompanyDepartmentFailure,
} = getAllCompanyDepartmentSlice.actions;

export default getAllCompanyDepartmentSlice.reducer;
