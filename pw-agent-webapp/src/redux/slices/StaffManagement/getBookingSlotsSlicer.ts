import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBookingSlots {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBookingSlots = {
  data: null,
  loading: false,
  error: null,
};

const getBookingSlotsSlicer = createSlice({
  name: "getBookingSlots",
  initialState,
  reducers: {
    getBookingSlots(state) {
      state.loading = true;
    },
    getBookingSlotsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBookingSlotsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBookingSlots,
  getBookingSlotsSuccess,
  getBookingSlotsFailure,
} = getBookingSlotsSlicer.actions;

export default getBookingSlotsSlicer.reducer;
