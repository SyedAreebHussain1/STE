import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllProjectsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllProjectsType = {
  data: null,
  loading: false,
  error: null,
};

const getAllProjectsSlice = createSlice({
  name: "getAllProjectsSlice",
  initialState,
  reducers: {
    getAllProjects(state) {
      state.loading = true;
    },
    getAllProjectsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllProjectsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllProjects, getAllProjectsSuccess, getAllProjectsFailure } =
  getAllProjectsSlice.actions;

export default getAllProjectsSlice.reducer;
