import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteProjectType = {
  data: null,
  loading: false,
  error: null,
};

const deleteProjectSlice = createSlice({
  name: "deleteProjectSlice",
  initialState,
  reducers: {
    deleteProject(state) {
      state.loading = true;
    },
    deleteProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFailure,
} = deleteProjectSlice.actions;

export default deleteProjectSlice.reducer;
