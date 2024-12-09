import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CreatePublicCalendarSlotList {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreatePublicCalendarSlotList = {
  data: null,
  loading: false,
  error: null,
};

const createPublicCalendarSlotListSlice = createSlice({
  name: "createPublicCalendarSlotListSlice",
  initialState,
  reducers: {
    createPublicCalendarSlotList(state) {
      state.loading = true;
    },
    createPublicCalendarSlotListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createPublicCalendarSlotListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createPublicCalendarSlotList,
  createPublicCalendarSlotListSuccess,
  createPublicCalendarSlotListFailure,
} = createPublicCalendarSlotListSlice.actions;

export default createPublicCalendarSlotListSlice.reducer;
