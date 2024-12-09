import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postPitchDeckAnswerType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postPitchDeckAnswerType = {
  data: null,
  loading: false,
  error: null,
};

const postPitchDeckAnswerSlice = createSlice({
  name: "postPitchDeckAnswerSlice",
  initialState,
  reducers: {
    postPitchDeckAnswer(state) {
      state.loading = true;
    },
    postPitchDeckAnswerSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postPitchDeckAnswerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { postPitchDeckAnswer, postPitchDeckAnswerSuccess, postPitchDeckAnswerFailure } =
  postPitchDeckAnswerSlice.actions;

export default postPitchDeckAnswerSlice.reducer;
