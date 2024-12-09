import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllUserList {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllUserList = {
  data: null,
  loading: false,
  error: null,
};

const getAllUserListSlice = createSlice({
  name: "getAllUserListSlice",
  initialState,
  reducers: {
    getAllUserList(state) {
      state.loading = true;
    },
    getAllUserListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllUserListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllUserList, getAllUserListSuccess, getAllUserListFailure } =
  getAllUserListSlice.actions;

export default getAllUserListSlice.reducer;
