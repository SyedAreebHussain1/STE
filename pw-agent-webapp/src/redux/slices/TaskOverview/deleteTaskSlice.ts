import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface DeleteTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteTaskType = {
  data: null,
  loading: false,
  error: null,
};

const deleteTaskSlice = createSlice({
  name: "deleteTaskSlice",
  initialState,
  reducers: {
    deleteTask(state) {
      state.loading = true;
    },
    deleteTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteTask, deleteTaskSuccess, deleteTaskFailure } =
  deleteTaskSlice.actions;

export default deleteTaskSlice.reducer;
