import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createProject {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createProject = {
  data: null,
  loading: false,
  error: null,
};

const createProjectSlice = createSlice({
  name: "createProject",
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
