import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateProjectType = {
  data: null,
  loading: false,
  error: null,
};

const createProjectSlice = createSlice({
  name: "createProjectSlice",
  initialState,
  reducers: {
    createProject(state) {
      state.loading = true;
    },
    createProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createProject, createProjectSuccess, createProjectFailure } =
  createProjectSlice.actions;

export default createProjectSlice.reducer;
