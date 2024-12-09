import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateLeadsLeadType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateLeadsLeadType = {
  data: null,
  loading: false,
  error: null,
};

const updateLeadsLeadSlice = createSlice({
  name: "updateLeadsLeadSlice",
  initialState,
  reducers: {
    updateLeadsLead(state) {
      state.loading = true;
    },
    updateLeadsLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateLeadsLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateLeadsLead(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    updateLeadsLead,
    updateLeadsLeadSuccess,
    updateLeadsLeadFailure,
    clearUpdateLeadsLead,
} = updateLeadsLeadSlice.actions;

export default updateLeadsLeadSlice.reducer;
