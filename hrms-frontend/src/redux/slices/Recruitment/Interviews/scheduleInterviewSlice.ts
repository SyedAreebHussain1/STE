import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleInterviewType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleInterviewType = {
  data: null,
  loading: false,
  error: null,
};

const ScheduleInterviewSlice = createSlice({
  name: "ScheduleInterviewSlice",
  initialState,
  reducers: {
    ScheduleInterview(state) {
      state.loading = true;
    },
    ScheduleInterviewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ScheduleInterviewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  ScheduleInterview,
  ScheduleInterviewSuccess,
  ScheduleInterviewFailure,
} = ScheduleInterviewSlice.actions;

export default ScheduleInterviewSlice.reducer;
