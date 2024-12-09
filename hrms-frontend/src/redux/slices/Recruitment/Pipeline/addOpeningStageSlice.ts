import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddOpeningStageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddOpeningStageType = {
  data: null,
  loading: false,
  error: null,
};

const addOpeningStageSlice = createSlice({
  name: "addOpeningStageSlice",
  initialState,
  reducers: {
    addOpeningStage(state) {
      state.loading = true;
    },
    addOpeningStageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addOpeningStageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addOpeningStage,
  addOpeningStageSuccess,
  addOpeningStageFailure,
} = addOpeningStageSlice.actions;

export default addOpeningStageSlice.reducer;
