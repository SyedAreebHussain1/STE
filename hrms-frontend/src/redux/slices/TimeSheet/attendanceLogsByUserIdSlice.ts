import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AttendanceLogsByUserIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AttendanceLogsByUserIdType = {
  data: null,
  loading: false,
  error: null,
};

const attendanceLogsByUserIdSlice = createSlice({
  name: "attendanceLogsByUserIdSlice",
  initialState,
  reducers: {
    attendanceLogsByUserId(state) {
      state.loading = true;
    },
    attendanceLogsByUserIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    attendanceLogsByUserIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAttendanceLogsByUserId(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  attendanceLogsByUserId,
  attendanceLogsByUserIdSuccess,
  attendanceLogsByUserIdFailure,
  clearAttendanceLogsByUserId,
} = attendanceLogsByUserIdSlice.actions;

export default attendanceLogsByUserIdSlice.reducer;
