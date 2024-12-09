import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SlotReschedule {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: SlotReschedule = {
  data: null,
  loading: false,
  error: null,
};

const slotRescheduleSlice = createSlice({
  name: "slotRescheduleSlice",
  initialState,
  reducers: {
    slotReschedule(state) {
      state.loading = true;
    },
    slotRescheduleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    slotRescheduleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { slotReschedule, slotRescheduleSuccess, slotRescheduleFailure } =
  slotRescheduleSlice.actions;

export default slotRescheduleSlice.reducer;
