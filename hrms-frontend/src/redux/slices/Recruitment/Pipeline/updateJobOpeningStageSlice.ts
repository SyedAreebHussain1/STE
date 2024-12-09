import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateJobOpeningStageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateJobOpeningStageType = {
  data: null,
  loading: false,
  error: null,
};

const updateJobOpeningStageSlice = createSlice({
  name: "updateJobOpeningStageSlice",
  initialState,
  reducers: {
    updateJobOpeningStage(state) {
      state.loading = true;
    },
    updateJobOpeningStageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateJobOpeningStageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateJobOpeningStage,
  updateJobOpeningStageSuccess,
  updateJobOpeningStageFailure,
} = updateJobOpeningStageSlice.actions;

export default updateJobOpeningStageSlice.reducer;
