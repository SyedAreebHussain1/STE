import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateInterviewType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateInterviewType = {
  data: null,
  loading: false,
  error: null,
};

const updateInterviewSlice = createSlice({
  name: "updateInterviewSlice",
  initialState,
  reducers: {
    updateInterview(state) {
      state.loading = true;
    },
    updateInterviewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateInterviewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    updateInterview,
  updateInterviewSuccess,
  updateInterviewFailure,
} = updateInterviewSlice.actions;

export default updateInterviewSlice.reducer;
