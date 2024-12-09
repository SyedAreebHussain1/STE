import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessAnswersComplete {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessAnswersComplete = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessAnswersCompleteSlice = createSlice({
  name: "getBusinessAnswersComplete",
  initialState,
  reducers: {
    getBusinessAnswersComplete(state) {
      state.loading = true;
    },
    getBusinessAnswersCompleteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessAnswersCompleteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessAnswersComplete,
  getBusinessAnswersCompleteSuccess,
  getBusinessAnswersCompleteFailure,
} = getBusinessAnswersCompleteSlice.actions;

export default getBusinessAnswersCompleteSlice.reducer;
