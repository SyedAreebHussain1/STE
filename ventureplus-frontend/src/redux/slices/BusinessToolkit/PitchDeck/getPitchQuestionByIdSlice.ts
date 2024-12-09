import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getPitchQuestionById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getPitchQuestionById = {
  data: null,
  loading: false,
  error: null,
};

const getPitchQuestionByIdSlice = createSlice({
  name: "getPitchQuestionById",
  initialState,
  reducers: {
    getPitchQuestionById(state) {
      state.loading = true;
    },
    getPitchQuestionByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPitchQuestionByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPitchQuestionById,
  getPitchQuestionByIdSuccess,
  getPitchQuestionByIdFailure,
} = getPitchQuestionByIdSlice.actions;

export default getPitchQuestionByIdSlice.reducer;
