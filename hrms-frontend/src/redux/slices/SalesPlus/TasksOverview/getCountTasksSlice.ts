import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetCountTasksType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetCountTasksType = {
  data: null,
  loading: false,
  error: null,
};

const getCountTasksSlice = createSlice({
  name: "getCountTasksSlice",
  initialState,
  reducers: {
    getCountTasks(state) {
      state.loading = true;
    },
    getCountTasksSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCountTasksFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetCountTasks(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCountTasks,
  getCountTasksSuccess,
  getCountTasksFailure,
  clearGetCountTasks,
} = getCountTasksSlice.actions;

export default getCountTasksSlice.reducer;
