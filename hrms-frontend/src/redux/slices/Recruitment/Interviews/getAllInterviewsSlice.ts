import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllInterviewsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllInterviewsType = {
  data: null,
  loading: false,
  error: null,
};

const getAllInterviewsSlice = createSlice({
  name: "getAllInterviewsSlice",
  initialState,
  reducers: {
    getAllInterviews(state) {
      state.loading = true;
    },
    getAllInterviewsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllInterviewsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllInterviews,
  getAllInterviewsSuccess,
  getAllInterviewsFailure,
} = getAllInterviewsSlice.actions;

export default getAllInterviewsSlice.reducer;
