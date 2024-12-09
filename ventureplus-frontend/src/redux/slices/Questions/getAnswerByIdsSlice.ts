import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAnswerByIds {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAnswerByIds = {
  data: null,
  loading: false,
  error: null,
};

const getAnswerByIdsSlice = createSlice({
  name: "getAnswerByIdsSlice",
  initialState,
  reducers: {
    getAnswerByIds(state) {
      state.loading = true;
    },
    getAnswerByIdsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAnswerByIdsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAnswerByIds(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAnswerByIds,
  getAnswerByIdsSuccess,
  getAnswerByIdsFailure,
  clearGetAnswerByIds,
} = getAnswerByIdsSlice.actions;

export default getAnswerByIdsSlice.reducer;
