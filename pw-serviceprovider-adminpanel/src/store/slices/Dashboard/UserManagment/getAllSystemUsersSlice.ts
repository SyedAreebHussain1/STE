import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllSystemUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllSystemUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getAllSystemUsersSlice = createSlice({
  name: "getAllSystemUsers",
  initialState,
  reducers: {
    getAllSystemUsers(state) {
      state.loading = true;
    },
    getAllSystemUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllSystemUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllSystemUsers,
  getAllSystemUsersSuccess,
  getAllSystemUsersFailure,
} = getAllSystemUsersSlice.actions;

export default getAllSystemUsersSlice.reducer;
