import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AttendanceDataByMonthType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AttendanceDataByMonthType = {
  data: null,
  loading: false,
  error: null,
};

const attendanceDataByMonthSlice = createSlice({
  name: "attendanceDataByMonthSlice",
  initialState,
  reducers: {
    attendanceDataByMonth(state) {
      state.loading = true;
    },
    attendanceDataByMonthSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    attendanceDataByMonthFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAttendanceDataByMonth(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  attendanceDataByMonth,
  attendanceDataByMonthSuccess,
  attendanceDataByMonthFailure,
  clearAttendanceDataByMonth,
} = attendanceDataByMonthSlice.actions;

export default attendanceDataByMonthSlice.reducer;
