import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetWorkSchedule {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetWorkSchedule = {
  data: null,
  loading: false,
  error: null,
};

const GetWorkScheduleSlice = createSlice({
  name: "GetWorkScheduleSlice",
  initialState,
  reducers: {
    GetWorkSchedule(state) {
      state.loading = true;
    },
    GetWorkScheduleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    GetWorkScheduleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  GetWorkSchedule,
  GetWorkScheduleSuccess,
  GetWorkScheduleFailure,
} = GetWorkScheduleSlice.actions;

export default GetWorkScheduleSlice.reducer;
