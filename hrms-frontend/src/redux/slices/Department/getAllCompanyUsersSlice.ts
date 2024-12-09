import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllCompanyUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllCompanyUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCompanyUsersSlice = createSlice({
  name: "getAllCompanyUsersSlice",
  initialState,
  reducers: {
    getAllCompanyUsers(state) {
      state.loading = true;
    },
    getAllCompanyUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCompanyUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCompanyUsers,
  getAllCompanyUsersSuccess,
  getAllCompanyUsersFailure,
} = getAllCompanyUsersSlice.actions;

export default getAllCompanyUsersSlice.reducer;
