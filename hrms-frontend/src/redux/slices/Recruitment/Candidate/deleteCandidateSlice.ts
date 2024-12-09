import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteCandidateType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteCandidateType = {
  data: null,
  loading: false,
  error: null,
};

const deleteCandidateSlice = createSlice({
  name: "deleteCandidateSlice",
  initialState,
  reducers: {
    deleteCandidate(state) {
      state.loading = true;
    },
    deleteCandidateSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteCandidateFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteCandidate,
  deleteCandidateSuccess,
  deleteCandidateFailure,
} = deleteCandidateSlice.actions;

export default deleteCandidateSlice.reducer;
