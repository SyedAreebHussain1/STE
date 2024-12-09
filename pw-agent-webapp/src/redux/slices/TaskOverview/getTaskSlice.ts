import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTaskType = {
  data: null,
  loading: false,
  error: null,
};

const getTaskSlice = createSlice({
  name: "getTaskSlice",
  initialState,
  reducers: {
    getTask(state) {
      state.loading = true;
    },
    getTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getTask, getTaskSuccess, getTaskFailure } = getTaskSlice.actions;

export default getTaskSlice.reducer;
