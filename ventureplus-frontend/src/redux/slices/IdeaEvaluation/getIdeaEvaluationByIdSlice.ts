import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getIdeaEvaluationById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getIdeaEvaluationById = {
  data: null,
  loading: false,
  error: null,
};

const getIdeaEvaluationByIdSlice = createSlice({
  name: "getIdeaEvaluationById",
  initialState,
  reducers: {
    getIdeaEvaluationById(state) {
      state.loading = true;
    },
    getIdeaEvaluationByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getIdeaEvaluationByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getIdeaEvaluationById,
  getIdeaEvaluationByIdSuccess,
  getIdeaEvaluationByIdFailure,
} = getIdeaEvaluationByIdSlice.actions;

export default getIdeaEvaluationByIdSlice.reducer;
