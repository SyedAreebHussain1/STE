import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUserListForStopPointtype {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUserListForStopPointtype = {
  data: null,
  loading: false,
  error: null,
};

const getUserListForStopPointSlice = createSlice({
  name: "getUserListForStopPointSlice",
  initialState,
  reducers: {
    getUserListForStopPoint(state) {
      state.loading = true;
    },
    getUserListForStopPointSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUserListForStopPointFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getUserListForStopPoint,
  getUserListForStopPointSuccess,
  getUserListForStopPointFailure,
} = getUserListForStopPointSlice.actions;

export default getUserListForStopPointSlice.reducer;
