import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllDepartmentsForProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllDepartmentsForProjectType = {
  data: null,
  loading: false,
  error: null,
};

const getAllDepartmentsForProjectSlice = createSlice({
  name: "getAllDepartmentsForProjectSlice",
  initialState,
  reducers: {
    getAllDepartmentsForProject(state) {
      state.loading = true;
    },
    getAllDepartmentsForProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllDepartmentsForProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllDepartmentsForProject,
  getAllDepartmentsForProjectSuccess,
  getAllDepartmentsForProjectFailure,
} = getAllDepartmentsForProjectSlice.actions;

export default getAllDepartmentsForProjectSlice.reducer;
