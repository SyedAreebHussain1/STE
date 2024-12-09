import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getProjectByIdSlice = createSlice({
  name: "getProjectByIdSlice",
  initialState,
  reducers: {
    getProjectById(state) {
      state.loading = true;
    },
    getProjectByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectById,
  getProjectByIdSuccess,
  getProjectByIdFailure,
} = getProjectByIdSlice.actions;

export default getProjectByIdSlice.reducer;
