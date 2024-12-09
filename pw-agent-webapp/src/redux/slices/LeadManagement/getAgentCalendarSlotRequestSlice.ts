import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetAgentCalendarSlotRequestType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAgentCalendarSlotRequestType = {
  data: null,
  loading: false,
  error: null,
};

const getAgentCalendarSlotRequestSlice = createSlice({
  name: "getAgentCalendarSlotRequestSlice",
  initialState,
  reducers: {
    getAgentCalendarSlotRequest(state) {
      state.loading = true;
    },
    getAgentCalendarSlotRequestSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgentCalendarSlotRequestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgentCalendarSlotRequest,
  getAgentCalendarSlotRequestSuccess,
  getAgentCalendarSlotRequestFailure,
} = getAgentCalendarSlotRequestSlice.actions;

export default getAgentCalendarSlotRequestSlice.reducer;
