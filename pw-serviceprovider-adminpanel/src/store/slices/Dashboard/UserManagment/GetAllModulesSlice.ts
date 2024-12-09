import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllModulesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllModulesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllModulesSlice = createSlice({
  name: "getAllModules",
  initialState,
  reducers: {
    getAllModules(state) {
      state.loading = true;
    },
    getAllModulesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllModulesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllModules, getAllModulesSuccess, getAllModulesFailure } =
  getAllModulesSlice.actions;

export default getAllModulesSlice.reducer;
