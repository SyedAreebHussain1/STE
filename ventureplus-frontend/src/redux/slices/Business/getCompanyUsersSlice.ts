import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyUsers {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyUsers = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyUsersSlice = createSlice({
  name: "getCompanyUsers",
  initialState,
  reducers: {
    getCompanyUsers(state) {
      state.loading = true;
    },
    getCompanyUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanyUsers,
  getCompanyUsersSuccess,
  getCompanyUsersFailure,
} = getCompanyUsersSlice.actions;

export default getCompanyUsersSlice.reducer;
