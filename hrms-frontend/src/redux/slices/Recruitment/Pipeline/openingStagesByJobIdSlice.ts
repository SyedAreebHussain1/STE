import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpeningStagesByJobIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: OpeningStagesByJobIdType = {
  data: null,
  loading: false,
  error: null,
};

const openingStagesByJobIdSlice = createSlice({
  name: "openingStagesByJobIdSlice",
  initialState,
  reducers: {
    openingStagesByJobId(state) {
      state.loading = true;
    },
    openingStagesByJobIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    openingStagesByJobIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  openingStagesByJobId,
  openingStagesByJobIdSuccess,
  openingStagesByJobIdFailure,
} = openingStagesByJobIdSlice.actions;

export default openingStagesByJobIdSlice.reducer;
