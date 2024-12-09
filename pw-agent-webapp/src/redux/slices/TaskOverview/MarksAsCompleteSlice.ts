import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MarksAsCompleteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: MarksAsCompleteType = {
  data: null,
  loading: false,
  error: null,
};

const MarksAsCompleteSlice = createSlice({
  name: "MarksAsCompleteSlice",
  initialState,
  reducers: {
    MarksAsComplete(state) {
      state.loading = true;
    },
    MarksAsCompleteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    MarksAsCompleteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearMarksAsComplete(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  MarksAsComplete,
  MarksAsCompleteSuccess,
  MarksAsCompleteFailure,
  clearMarksAsComplete,
} = MarksAsCompleteSlice.actions;

export default MarksAsCompleteSlice.reducer;
