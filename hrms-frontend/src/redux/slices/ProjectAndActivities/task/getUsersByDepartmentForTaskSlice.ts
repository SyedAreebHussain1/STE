import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUsersByDepartmentForTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUsersByDepartmentForTaskType = {
  data: null,
  loading: false,
  error: null,
};

const getUsersByDepartmentForTaskSlice = createSlice({
  name: "getUsersByDepartmentForTaskSlice",
  initialState,
  reducers: {
    getUsersByDepartmentForTask(state) {
      state.loading = true;
    },
    getUsersByDepartmentForTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUsersByDepartmentForTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getUsersByDepartmentForTask,
  getUsersByDepartmentForTaskSuccess,
  getUsersByDepartmentForTaskFailure,
} = getUsersByDepartmentForTaskSlice.actions;

export default getUsersByDepartmentForTaskSlice.reducer;
