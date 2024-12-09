import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateFinalLeadsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateFinalLeadsType = {
  data: null,
  loading: false,
  error: null,
};

const createFinalLeadsSlice = createSlice({
  name: "createFinalLeadsSlice",
  initialState,
  reducers: {
    createFinalLeads(state) {
      state.loading = true;
    },
    createFinalLeadsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createFinalLeadsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreateFinalLeads(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createFinalLeads,
  createFinalLeadsSuccess,
  createFinalLeadsFailure,
  clearCreateFinalLeads,
} = createFinalLeadsSlice.actions;

export default createFinalLeadsSlice.reducer;
