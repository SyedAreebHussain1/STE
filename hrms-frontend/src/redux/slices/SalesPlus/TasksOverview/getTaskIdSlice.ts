import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetTaskIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTaskIdType = {
  data: null,
  loading: false,
  error: null,
};

const getTaskIdSlice = createSlice({
  name: "getTaskIdSlice",
  initialState,
  reducers: {
    getTaskId(state) {
      state.loading = true;
    },
    getTaskIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTaskIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTaskId(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTaskId, getTaskIdSuccess, getTaskIdFailure, clearGetTaskId } =
  getTaskIdSlice.actions;

export default getTaskIdSlice.reducer;
