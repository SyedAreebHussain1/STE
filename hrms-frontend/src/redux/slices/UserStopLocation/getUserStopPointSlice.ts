import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUserStopPoint {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUserStopPoint = {
  data: null,
  loading: false,
  error: null,
};

const getUserStopPointSlice = createSlice({
  name: "getUserStopPointSlice",
  initialState,
  reducers: {
    getUserStopPoint(state) {
      state.loading = true;
    },
    getUserStopPointSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUserStopPointFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    CleargetUserStopPoint(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getUserStopPoint,
  getUserStopPointSuccess,
  getUserStopPointFailure,
  CleargetUserStopPoint,
} = getUserStopPointSlice.actions;

export default getUserStopPointSlice.reducer;
