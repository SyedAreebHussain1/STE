import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllCandidatesByJobOpeningIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllCandidatesByJobOpeningIdType = {
  data: null,
  loading: false,
  error: null,
};

const getAllCandidatesByJobOpeningIdSlice = createSlice({
  name: "getAllCandidatesByJobOpeningIdSlice",
  initialState,
  reducers: {
    getAllCandidatesByJobOpeningId(state) {
      state.loading = true;
    },
    getAllCandidatesByJobOpeningIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllCandidatesByJobOpeningIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllCandidatesByJobOpeningId,
  getAllCandidatesByJobOpeningIdSuccess,
  getAllCandidatesByJobOpeningIdFailure,
} = getAllCandidatesByJobOpeningIdSlice.actions;

export default getAllCandidatesByJobOpeningIdSlice.reducer;
