import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetDepartmentUsersIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetDepartmentUsersIdType = {
  data: null,
  loading: false,
  error: null,
};

const getDepartmentUsersIdSlice = createSlice({
  name: "getDepartmentUsersIdSlice",
  initialState,
  reducers: {
    getDepartmentUsersId(state) {
      state.loading = true;
    },
    getDepartmentUsersIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getDepartmentUsersIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetDepartmentUsersId(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getDepartmentUsersId,
  getDepartmentUsersIdSuccess,
  getDepartmentUsersIdFailure,
  clearGetDepartmentUsersId,
} = getDepartmentUsersIdSlice.actions;

export default getDepartmentUsersIdSlice.reducer;
