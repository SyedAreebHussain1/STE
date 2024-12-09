import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const createDepartmentSlice = createSlice({
  name: "createDepartmentSlice",
  initialState,
  reducers: {
    createDepartment(state) {
      state.loading = true;
    },
    createDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createDepartment,
  createDepartmentSuccess,
  createDepartmentFailure,
} = createDepartmentSlice.actions;

export default createDepartmentSlice.reducer;
