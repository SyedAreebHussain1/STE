import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateLeadsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateLeadsType = {
  data: null,
  loading: false,
  error: null,
};

const createLeadsSlice = createSlice({
  name: "createLeadsSlice",
  initialState,
  reducers: {
    createLeads(state) {
      state.loading = true;
    },
    createLeadsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createLeadsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearCreateLeads(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    createLeads,
    createLeadsSuccess,
    createLeadsFailure,
    clearCreateLeads,
} = createLeadsSlice.actions;

export default createLeadsSlice.reducer;
