import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getAllUsersSlice = createSlice({
  name: "getAllUsersSlice",
  initialState,
  reducers: {
    getAllUsers(state) {
      state.loading = true;
    },
    getAllUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllUsers(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllUsers,
  getAllUsersSuccess,
  getAllUsersFailure,
  clearGetAllUsers,
} = getAllUsersSlice.actions;

export default getAllUsersSlice.reducer;
