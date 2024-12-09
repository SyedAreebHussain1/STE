import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getFacing {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getFacing = {
  data: null,
  loading: false,
  error: null,
};

const getFacingSlice = createSlice({
  name: "getFacing",
  initialState,
  reducers: {
    getFacing(state) {
      state.loading = true;
    },
    getFacingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getFacingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getFacing, getFacingSuccess, getFacingFailure } =
  getFacingSlice.actions;

export default getFacingSlice.reducer;
