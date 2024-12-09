import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteInterviewType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteInterviewType = {
  data: null,
  loading: false,
  error: null,
};

const deleteInterviewSlice = createSlice({
  name: "deleteInterviewSlice",
  initialState,
  reducers: {
    deleteInterview(state) {
      state.loading = true;
    },
    deleteInterviewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteInterviewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteInterview,
  deleteInterviewSuccess,
  deleteInterviewFailure,
} = deleteInterviewSlice.actions;

export default deleteInterviewSlice.reducer;
