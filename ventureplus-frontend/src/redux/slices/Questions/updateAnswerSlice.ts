import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateAnswer {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateAnswer = {
  data: null,
  loading: false,
  error: null,
};

const updateAnswerSlice = createSlice({
  name: "updateAnswerSlice",
  initialState,
  reducers: {
    updateAnswer(state) {
      state.loading = true;
    },
    updateAnswerSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateAnswerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { updateAnswer, updateAnswerSuccess, updateAnswerFailure } =
  updateAnswerSlice.actions;

export default updateAnswerSlice.reducer;
