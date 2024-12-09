import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UpdateTaskSliceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateTaskSliceType = {
  data: null,
  loading: false,
  error: null,
};

const updateTaskSlice = createSlice({
  name: "updateTaskSlice",
  initialState,
  reducers: {
    updateTask(state) {
      state.loading = true;
    },
    updateTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateTask(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  updateTask,
  updateTaskSuccess,
  updateTaskFailure,
  clearUpdateTask,
} = updateTaskSlice.actions;

export default updateTaskSlice.reducer;
