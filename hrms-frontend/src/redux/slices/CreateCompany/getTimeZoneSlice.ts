import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getTimeZone {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getTimeZone = {
  data: null,
  loading: false,
  error: null,
};

const getTimeZoneSlice = createSlice({
  name: "getTimeZone",
  initialState,
  reducers: {
    getTimeZone(state) {
      state.loading = true;
    },
    getTimeZoneSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTimeZoneFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTimeZone, getTimeZoneSuccess, getTimeZoneFailure } =
  getTimeZoneSlice.actions;

export default getTimeZoneSlice.reducer;
