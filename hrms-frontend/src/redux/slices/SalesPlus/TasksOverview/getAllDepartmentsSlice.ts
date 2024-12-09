import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllDepartmentsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllDepartmentsType = {
  data: null,
  loading: false,
  error: null,
};

const getAllDepartmentsSlice = createSlice({
  name: "getAllDepartmentsSlice",
  initialState,
  reducers: {
    getAllDepartments(state) {
      state.loading = true;
    },
    getAllDepartmentsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllDepartmentsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllDepartments(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllDepartments,
  getAllDepartmentsSuccess,
  getAllDepartmentsFailure,
  clearGetAllDepartments,
} = getAllDepartmentsSlice.actions;

export default getAllDepartmentsSlice.reducer;
