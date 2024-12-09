import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetAgentCalendarSlotListForBooked {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAgentCalendarSlotListForBooked = {
  data: null,
  loading: false,
  error: null,
};

const getAgentCalendarSlotListForBookedSlice = createSlice({
  name: "getAgentCalendarSlotListForBookedSlice",
  initialState,
  reducers: {
    getAgentCalendarSlotListForBooked(state) {
      state.loading = true;
    },
    getAgentCalendarSlotListForBookedSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgentCalendarSlotListForBookedFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgentCalendarSlotListForBooked,
  getAgentCalendarSlotListForBookedSuccess,
  getAgentCalendarSlotListForBookedFailure,
} = getAgentCalendarSlotListForBookedSlice.actions;

export default getAgentCalendarSlotListForBookedSlice.reducer;
