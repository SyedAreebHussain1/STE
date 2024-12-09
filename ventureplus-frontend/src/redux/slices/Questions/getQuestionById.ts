import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetQuestionById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetQuestionById = {
  data: null,
  loading: false,
  error: null,
};

const getQuestionByIdSlice = createSlice({
  name: "getQuestionByIdSlice",
  initialState,
  reducers: {
    getQuestionById(state) {
      state.loading = true;
    },
    getQuestionByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getQuestionByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetQuestionById(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getQuestionById,
  getQuestionByIdSuccess,
  getQuestionByIdFailure,
  clearGetQuestionById
} = getQuestionByIdSlice.actions;

export default getQuestionByIdSlice.reducer;
