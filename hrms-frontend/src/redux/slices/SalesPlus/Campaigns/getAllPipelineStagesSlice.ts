import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllPipelineStagesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllPipelineStagesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllPipelineStagesSlice = createSlice({
  name: "getAllPipelineStagesSlice",
  initialState,
  reducers: {
    getAllPipelineStages(state) {
      state.loading = true;
    },
    getAllPipelineStagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllPipelineStagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllPipelineStages(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllPipelineStages,
  getAllPipelineStagesSuccess,
  getAllPipelineStagesFailure,
  clearGetAllPipelineStages,
} = getAllPipelineStagesSlice.actions;

export default getAllPipelineStagesSlice.reducer;
