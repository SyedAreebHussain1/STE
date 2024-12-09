import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditFinalLeadType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditFinalLeadType = {
  data: null,
  loading: false,
  error: null,
};

const editFinalLeadSlice = createSlice({
  name: "editFinalLeadSlice",
  initialState,
  reducers: {
    editFinalLead(state) {
      state.loading = true;
    },
    editFinalLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editFinalLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearEditFinalLead(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editFinalLead,
  editFinalLeadSuccess,
  editFinalLeadFailure,
  clearEditFinalLead,
} = editFinalLeadSlice.actions;

export default editFinalLeadSlice.reducer;
