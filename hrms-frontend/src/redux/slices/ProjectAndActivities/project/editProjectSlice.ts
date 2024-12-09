import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editProjectType = {
  data: null,
  loading: false,
  error: null,
};

const editProjectSlice = createSlice({
  name: "editProjectSlice",
  initialState,
  reducers: {
    editProject(state) {
      state.loading = true;
    },
    editProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    editProject,
  editProjectSuccess,
  editProjectFailure,
} = editProjectSlice.actions;

export default editProjectSlice.reducer;
