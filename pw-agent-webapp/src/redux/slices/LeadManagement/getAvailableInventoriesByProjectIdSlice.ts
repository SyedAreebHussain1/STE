import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAvailableInventoriesByProjectId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAvailableInventoriesByProjectId = {
  data: null,
  loading: false,
  error: null,
};

const getAvailableInventoriesByProjectIdSlice = createSlice({
  name: "getAvailableInventoriesByProjectIdSlice",
  initialState,
  reducers: {
    getAvailableInventoriesByProjectId(state) {
      state.loading = true;
    },
    getAvailableInventoriesByProjectIdSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getAvailableInventoriesByProjectIdFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAvailableInventoriesByProjectId,
  getAvailableInventoriesByProjectIdSuccess,
  getAvailableInventoriesByProjectIdFailure,
} = getAvailableInventoriesByProjectIdSlice.actions;

export default getAvailableInventoriesByProjectIdSlice.reducer;
