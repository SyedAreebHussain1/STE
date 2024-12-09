import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCompanyUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCompanyUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyUsersSlice = createSlice({
  name: "getCompanyUsersSlice",
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
    clearGetCompanyUsers(state, action: PayloadAction<any>) {
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
  clearGetCompanyUsers,
} = getCompanyUsersSlice.actions;

export default getCompanyUsersSlice.reducer;
