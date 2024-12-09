import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TopicsState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: TopicsState = {
  data: null,
  loading: false,
  error: null,
};

const topicsSlice = createSlice({
  name: "topicsSlice",
  initialState,
  reducers: {
    getTopicsAdmin(state) {
      state.loading = true;
    },
    getTopicsAdminSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTopicsAdminFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTopicsAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getTopicsAdmin,
  getTopicsAdminSuccess,
  getTopicsAdminFailure,
  clearGetTopicsAdmin,
} = topicsSlice.actions;

export default topicsSlice.reducer;
