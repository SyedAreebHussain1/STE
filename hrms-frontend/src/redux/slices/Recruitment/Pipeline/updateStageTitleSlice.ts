import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateStageTitleType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateStageTitleType = {
  data: null,
  loading: false,
  error: null,
};

const updateStageTitleSlice = createSlice({
  name: "updateStageTitleSlice",
  initialState,
  reducers: {
    updateStageTitle(state) {
      state.loading = true;
    },
    updateStageTitleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateStageTitleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateStageTitle,
  updateStageTitleSuccess,
  updateStageTitleFailure,
} = updateStageTitleSlice.actions;

export default updateStageTitleSlice.reducer;
