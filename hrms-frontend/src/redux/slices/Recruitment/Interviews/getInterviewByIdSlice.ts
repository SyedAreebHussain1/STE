import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getInterviewByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getInterviewByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getInterviewByIdSlice = createSlice({
  name: "getInterviewByIdSlice",
  initialState,
  reducers: {
    getInterviewById(state) {
      state.loading = true;
    },
    getInterviewByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getInterviewByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getInterviewById,
  getInterviewByIdSuccess,
  getInterviewByIdFailure,
} = getInterviewByIdSlice.actions;

export default getInterviewByIdSlice.reducer;
