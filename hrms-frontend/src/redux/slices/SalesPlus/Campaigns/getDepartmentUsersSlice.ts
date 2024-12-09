import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetDepartmentUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetDepartmentUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getDepartmentUsersSlice = createSlice({
  name: "getDepartmentUsersSlice",
  initialState,
  reducers: {
    getDepartmentUsers(state) {
      state.loading = true;
    },
    getDepartmentUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getDepartmentUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetDepartmentUsers(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getDepartmentUsers,
  getDepartmentUsersSuccess,
  getDepartmentUsersFailure,
  clearGetDepartmentUsers,
} = getDepartmentUsersSlice.actions;

export default getDepartmentUsersSlice.reducer;
