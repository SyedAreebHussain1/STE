import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditTaskType = {
  data: null,
  loading: false,
  error: null,
};

const editTaskSlice = createSlice({
  name: "editTaskSlice",
  initialState,
  reducers: {
    editTask(state) {
      state.loading = true;
    },
    editTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearEditTask(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { editTask, editTaskSuccess, editTaskFailure, clearEditTask } =
  editTaskSlice.actions;

export default editTaskSlice.reducer;
