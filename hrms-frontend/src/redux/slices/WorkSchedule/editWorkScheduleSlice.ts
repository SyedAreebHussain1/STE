import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editWorkSchedule {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editWorkSchedule = {
  data: null,
  loading: false,
  error: null,
};

const editWorkScheduleSlice = createSlice({
  name: "editWorkScheduleSlice",
  initialState,
  reducers: {
    editWorkSchedule(state) {
      state.loading = true;
    },
    editWorkScheduleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editWorkScheduleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editWorkSchedule,
  editWorkScheduleSuccess,
  editWorkScheduleFailure,
} = editWorkScheduleSlice.actions;

export default editWorkScheduleSlice.reducer;
