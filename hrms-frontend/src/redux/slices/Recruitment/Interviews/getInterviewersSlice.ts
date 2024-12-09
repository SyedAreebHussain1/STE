import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getInterviewersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getInterviewersType = {
  data: null,
  loading: false,
  error: null,
};

const getInterviewersSlice = createSlice({
  name: "getInterviewersSlice",
  initialState,
  reducers: {
    getInterviewers(state) {
      state.loading = true;
    },
    getInterviewersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getInterviewersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getInterviewers,
  getInterviewersSuccess,
  getInterviewersFailure,
} = getInterviewersSlice.actions;

export default getInterviewersSlice.reducer;
