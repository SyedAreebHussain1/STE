import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getTasksByProjectIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getTasksByProjectIdType = {
  data: null,
  loading: false,
  error: null,
};

const getTasksByProjectIdSlice = createSlice({
  name: "getTasksByProjectIdSlice",
  initialState,
  reducers: {
    getTasksByProjectId(state) {
      state.loading = true;
    },
    getTasksByProjectIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTasksByProjectIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTasksByProjectId, getTasksByProjectIdSuccess, getTasksByProjectIdFailure } =
  getTasksByProjectIdSlice.actions;

export default getTasksByProjectIdSlice.reducer;
