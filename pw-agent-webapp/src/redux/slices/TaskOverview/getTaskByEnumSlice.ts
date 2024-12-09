import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetTaskByEnumType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTaskByEnumType = {
  data: null,
  loading: false,
  error: null,
};

const getTaskByEnumSlice = createSlice({
  name: "getTaskByEnumSlice",
  initialState,
  reducers: {
    getTaskByEnum(state) {
      state.loading = true;
    },
    getTaskByEnumSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTaskByEnumFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTaskByEnum(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getTaskByEnum,
  getTaskByEnumSuccess,
  getTaskByEnumFailure,
  clearGetTaskByEnum,
} = getTaskByEnumSlice.actions;

export default getTaskByEnumSlice.reducer;
