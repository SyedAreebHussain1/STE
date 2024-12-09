import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditPipelineStageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditPipelineStageType = {
  data: null,
  loading: false,
  error: null,
};

const editPipelineStageSlice = createSlice({
  name: "editPipelineStageSlice",
  initialState,
  reducers: {
    editPipelineStage(state) {
      state.loading = true;
    },
    editPipelineStageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editPipelineStageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editPipelineStage,
  editPipelineStageSuccess,
  editPipelineStageFailure,
} = editPipelineStageSlice.actions;

export default editPipelineStageSlice.reducer;
