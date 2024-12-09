import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface usersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: usersType = {
  data: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    users(state) {
      state.loading = true;
    },
    usersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    usersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    postAffiliateUserSlice(state) {
      state.loading = true;
    },
    postAffiliateUserSliceSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postAffiliateUserSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getAffiliateUser(state) {
      state.loading = true;
    },
    getAffiliateUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAffiliateUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteAffiliateUser(state) {
      state.loading = true;
    },
    deleteAffiliateUserSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteAffiliateUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { users, usersSuccess, usersFailure, postAffiliateUserSlice, postAffiliateUserSliceFailure, postAffiliateUserSliceSuccess, getAffiliateUser, getAffiliateUserFailure, getAffiliateUserSuccess, deleteAffiliateUser, deleteAffiliateUserFailure, deleteAffiliateUserSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
