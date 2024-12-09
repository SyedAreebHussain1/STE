import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateCandidateType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateCandidateType = {
  data: null,
  loading: false,
  error: null,
};

const createCandidateSlice = createSlice({
  name: "createCandidateSlice",
  initialState,
  reducers: {
    createCandidate(state) {
      state.loading = true;
    },
    createCandidateSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createCandidateFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createCandidate,
  createCandidateSuccess,
  createCandidateFailure,
} = createCandidateSlice.actions;

export default createCandidateSlice.reducer;
