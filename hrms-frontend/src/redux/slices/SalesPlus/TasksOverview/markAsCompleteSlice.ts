import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkAsCompleteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: MarkAsCompleteType = {
  data: null,
  loading: false,
  error: null,
};

const markAsCompleteSlice = createSlice({
  name: "markAsCompleteSlice",
  initialState,
  reducers: {
    markAsComplete(state) {
      state.loading = true;
    },
    markAsCompleteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    markAsCompleteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearMarkAsComplete(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  markAsComplete,
  markAsCompleteSuccess,
  markAsCompleteFailure,
  clearMarkAsComplete,
} = markAsCompleteSlice.actions;

export default markAsCompleteSlice.reducer;
