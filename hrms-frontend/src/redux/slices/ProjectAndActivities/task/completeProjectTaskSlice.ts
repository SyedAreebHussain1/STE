import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface completeProjectTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: completeProjectTaskType = {
  data: null,
  loading: false,
  error: null,
};

const completeProjectTaskSlice = createSlice({
  name: "completeProjectTaskSlice",
  initialState,
  reducers: {
    completeProjectTask(state) {
      state.loading = true;
    },
    completeProjectTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    completeProjectTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  completeProjectTask,
  completeProjectTaskSuccess,
  completeProjectTaskFailure,
} = completeProjectTaskSlice.actions;

export default completeProjectTaskSlice.reducer;
