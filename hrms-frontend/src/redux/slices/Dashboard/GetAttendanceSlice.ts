import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAttendance {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAttendance = {
  data: null,
  loading: false,
  error: null,
};

const getAttendanceSlice = createSlice({
  name: "getAttendance",
  initialState,
  reducers: {
    getAttendance(state) {
      state.loading = true;
    },
    getAttendanceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAttendanceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAttendance, getAttendanceSuccess, getAttendanceFailure } =
  getAttendanceSlice.actions;

export default getAttendanceSlice.reducer;
