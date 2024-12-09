import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreatePipelineStagesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreatePipelineStagesType = {
  data: null,
  loading: false,
  error: null,
};

const createPipelineStagesSlice = createSlice({
  name: "createPipelineStagesSlice",
  initialState,
  reducers: {
    createPipelineStages(state) {
      state.loading = true;
    },
    createPipelineStagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createPipelineStagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreatePipelineStages(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createPipelineStages,
  createPipelineStagesSuccess,
  createPipelineStagesFailure,
  clearCreatePipelineStages,
} = createPipelineStagesSlice.actions;

export default createPipelineStagesSlice.reducer;
