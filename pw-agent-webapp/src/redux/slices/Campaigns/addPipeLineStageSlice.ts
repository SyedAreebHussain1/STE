import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddPipeLineStageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddPipeLineStageType = {
  data: null,
  loading: false,
  error: null,
};

const addPipeLineStageSlice = createSlice({
  name: "addPipeLineStageSlice",
  initialState,
  reducers: {
    addPipeLineStage(state) {
      state.loading = true;
    },
    addPipeLineStageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addPipeLineStageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addPipeLineStage,
  addPipeLineStageSuccess,
  addPipeLineStageFailure,
} = addPipeLineStageSlice.actions;

export default addPipeLineStageSlice.reducer;
