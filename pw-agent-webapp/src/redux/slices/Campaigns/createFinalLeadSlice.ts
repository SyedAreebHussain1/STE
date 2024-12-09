import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateFinalLeadType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateFinalLeadType = {
  data: null,
  loading: false,
  error: null,
};

const createFinalLeadSlice = createSlice({
  name: "createFinalLeadSlice",
  initialState,
  reducers: {
    createFinalLead(state) {
      state.loading = true;
    },
    createFinalLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createFinalLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createFinalLead,
  createFinalLeadSuccess,
  createFinalLeadFailure,
} = createFinalLeadSlice.actions;

export default createFinalLeadSlice.reducer;
