import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LinkedAnswers {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LinkedAnswers = {
  data: null,
  loading: false,
  error: null,
};

const linkedAnswersSlice = createSlice({
  name: "linkedAnswersSlice",
  initialState,
  reducers: {
    linkedAnswers(state) {
      state.loading = true;
    },
    linkedAnswersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    linkedAnswersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearLinkedAnswers(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  linkedAnswers,
  linkedAnswersSuccess,
  linkedAnswersFailure,
  clearLinkedAnswers,
} = linkedAnswersSlice.actions;

export default linkedAnswersSlice.reducer;
