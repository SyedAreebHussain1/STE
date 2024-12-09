import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getTaskByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getTaskByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getTaskByIdSlice = createSlice({
  name: "getProjectTaskByIdSlice",
  initialState,
  reducers: {
    getTaskById(state) {
      state.loading = true;
    },
    getTaskByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTaskByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getTaskById,
  getTaskByIdSuccess,
  getTaskByIdFailure,
} = getTaskByIdSlice.actions;

export default getTaskByIdSlice.reducer;
