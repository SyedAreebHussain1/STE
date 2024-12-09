import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddWorkSchedule {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddWorkSchedule = {
  data: null,
  loading: false,
  error: null,
};

const AddWorkScheduleSlice = createSlice({
  name: "AddWorkScheduleSlice",
  initialState,
  reducers: {
    AddWorkSchedule(state) {
      state.loading = true;
    },
    AddWorkScheduleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    AddWorkScheduleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  AddWorkSchedule,
  AddWorkScheduleSuccess,
  AddWorkScheduleFailure,
} = AddWorkScheduleSlice.actions;

export default AddWorkScheduleSlice.reducer;
