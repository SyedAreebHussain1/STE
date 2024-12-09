import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetAgentCalendarSlotListType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAgentCalendarSlotListType = {
  data: null,
  loading: false,
  error: null,
};

const getAgentCalendarSlotListSlice = createSlice({
  name: "getAgentCalendarSlotListSlice",
  initialState,
  reducers: {
    getAgentCalendarSlotList(state) {
      state.loading = true;
    },
    getAgentCalendarSlotListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgentCalendarSlotListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgentCalendarSlotList,
  getAgentCalendarSlotListSuccess,
  getAgentCalendarSlotListFailure,
} = getAgentCalendarSlotListSlice.actions;

export default getAgentCalendarSlotListSlice.reducer;
