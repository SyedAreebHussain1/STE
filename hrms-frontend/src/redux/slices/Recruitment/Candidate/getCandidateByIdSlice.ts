import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCandidateByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCandidateByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getCandidateByIdSlice = createSlice({
  name: "getCandidateByIdSlice",
  initialState,
  reducers: {
    getCandidateById(state) {
      state.loading = true;
    },
    getCandidateByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCandidateByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCandidateById,
  getCandidateByIdSuccess,
  getCandidateByIdFailure,
} = getCandidateByIdSlice.actions;

export default getCandidateByIdSlice.reducer;
