import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateTaskType = {
  data: null,
  loading: false,
  error: null,
};

const createTaskSlice = createSlice({
  name: "createProjectTaskSlice",
  initialState,
  reducers: {
    createTask(state) {
      state.loading = true;
    },
    createTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createTask, createTaskSuccess, createTaskFailure } =
  createTaskSlice.actions;

export default createTaskSlice.reducer;
