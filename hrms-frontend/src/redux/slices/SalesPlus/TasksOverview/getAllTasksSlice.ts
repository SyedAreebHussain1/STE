import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllTasksType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllTasksType = {
  data: null,
  loading: false,
  error: null,
};

const getAllTasksSlice = createSlice({
  name: "getAllTasksSlice",
  initialState,
  reducers: {
    getAllTasks(state) {
      state.loading = true;
    },
    getAllTasksSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllTasksFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllTasks(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllTasks,
  getAllTasksSuccess,
  getAllTasksFailure,
  clearGetAllTasks,
} = getAllTasksSlice.actions;

export default getAllTasksSlice.reducer;
