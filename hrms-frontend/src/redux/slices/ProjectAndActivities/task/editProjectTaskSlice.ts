import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editTaskType = {
  data: null,
  loading: false,
  error: null,
};

const editTaskSlice = createSlice({
  name: "editProjectTaskSlice",
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
  },
});

export const {
    editTask,
  editTaskSuccess,
  editTaskFailure,
} = editTaskSlice.actions;

export default editTaskSlice.reducer;
