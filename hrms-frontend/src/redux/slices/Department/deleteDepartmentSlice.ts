import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteDepartmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteDepartmentType = {
  data: null,
  loading: false,
  error: null,
};

const deleteDepartmentSlice = createSlice({
  name: "deleteDepartmentSlice",
  initialState,
  reducers: {
    deleteDepartment(state) {
      state.loading = true;
    },
    deleteDepartmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteDepartmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteDepartment,
  deleteDepartmentSuccess,
  deleteDepartmentFailure,
} = deleteDepartmentSlice.actions;

export default deleteDepartmentSlice.reducer;
