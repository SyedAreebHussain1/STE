import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllCandidatesByJobIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllCandidatesByJobIdType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCandidatesByJobIdSlice = createSlice({
  name: "getAllCandidatesByJobIdSlice",
  initialState,
  reducers: {
    getAllCandidatesByJobId(state) {
      state.loading = true;
    },
    getAllCandidatesByJobIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCandidatesByJobIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCandidatesByJobId,
  getAllCandidatesByJobIdSuccess,
  getAllCandidatesByJobIdFailure,
} = getAllCandidatesByJobIdSlice.actions;

export default getAllCandidatesByJobIdSlice.reducer;
