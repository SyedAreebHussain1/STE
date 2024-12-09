import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createInventoryOfExistingProject {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createInventoryOfExistingProject = {
  data: null,
  loading: false,
  error: null,
};

const createInventoryOfExistingProjectSlice = createSlice({
  name: "createInventoryOfExistingProject",
  initialState,
  reducers: {
    createInventoryOfExistingProject(state) {
      state.loading = true;
    },
    createInventoryOfExistingProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createInventoryOfExistingProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createInventoryOfExistingProject,
  createInventoryOfExistingProjectSuccess,
  createInventoryOfExistingProjectFailure,
} = createInventoryOfExistingProjectSlice.actions;

export default createInventoryOfExistingProjectSlice.reducer;
