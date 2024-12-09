import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAgencyStaffRequestList {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAgencyStaffRequestList = {
  data: null,
  loading: false,
  error: null,
};

const getAgencyStaffRequestListSlicer = createSlice({
  name: "getAgencyStaffRequestList",
  initialState,
  reducers: {
    getAgencyStaffRequestList(state) {
      state.loading = true;
    },
    getAgencyStaffRequestListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgencyStaffRequestListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgencyStaffRequestList,
  getAgencyStaffRequestListSuccess,
  getAgencyStaffRequestListFailure,
} = getAgencyStaffRequestListSlicer.actions;

export default getAgencyStaffRequestListSlicer.reducer;
