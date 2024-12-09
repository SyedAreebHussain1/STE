import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetProfileStaffListType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetProfileStaffListType = {
  data: null,
  loading: false,
  error: null,
};

const getProfileStaffListSlice = createSlice({
  name: "getProfileStaffListSlice",
  initialState,
  reducers: {
    getProfileStaffList(state) {
      state.loading = true;
    },
    getProfileStaffListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProfileStaffListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetProfileStaffList(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getProfileStaffList,
  getProfileStaffListSuccess,
  getProfileStaffListFailure,
  clearGetProfileStaffList,
} = getProfileStaffListSlice.actions;

export default getProfileStaffListSlice.reducer;
