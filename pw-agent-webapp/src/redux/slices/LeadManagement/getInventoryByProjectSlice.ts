import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetInventoryByProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetInventoryByProjectType = {
  data: null,
  loading: false,
  error: null,
};

const getInventoryByProjectSlice = createSlice({
  name: "getInventoryByProjectSlice",
  initialState,
  reducers: {
    getInventoryByProject(state) {
      state.loading = true;
    },
    getInventoryByProjectSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getInventoryByProjectFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getInventoryByProject,
  getInventoryByProjectSuccess,
  getInventoryByProjectFailure,
} = getInventoryByProjectSlice.actions;

export default getInventoryByProjectSlice.reducer;
