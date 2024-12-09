import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetPipelinesStagesLeadType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetPipelinesStagesLeadType = {
  data: null,
  loading: false,
  error: null,
};

const getPipelinesStagesLeadSlice = createSlice({
  name: "getPipelinesStagesLeadSlice",
  initialState,
  reducers: {
    getPipelinesStagesLead(state) {
      state.loading = true;
    },
    getPipelinesStagesLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getPipelinesStagesLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getPipelinesStagesLead,
  getPipelinesStagesLeadSuccess,
  getPipelinesStagesLeadFailure,
} = getPipelinesStagesLeadSlice.actions;

export default getPipelinesStagesLeadSlice.reducer;
