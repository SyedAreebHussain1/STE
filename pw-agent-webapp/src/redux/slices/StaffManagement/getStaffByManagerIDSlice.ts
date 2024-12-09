import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getStaffByManagerID {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getStaffByManagerID = {
  data: null,
  loading: false,
  error: null,
};

const getStaffByManagerIDSlice = createSlice({
  name: "getStaffByManagerID",
  initialState,
  reducers: {
    getStaffByManagerID(state) {
      state.loading = true;
    },
    getStaffByManagerIDSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getStaffByManagerIDFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getStaffByManagerID,
  getStaffByManagerIDSuccess,
  getStaffByManagerIDFailure,
} = getStaffByManagerIDSlice.actions;

export default getStaffByManagerIDSlice.reducer;
