import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddNewLeadFollowUpType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddNewLeadFollowUpType = {
  data: null,
  loading: false,
  error: null,
};

const addNewLeadFollowUpSlice = createSlice({
  name: "addNewLeadFollowUpSlice",
  initialState,
  reducers: {
    addNewLeadFollowUp(state) {
      state.loading = true;
    },
    addNewLeadFollowUpSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addNewLeadFollowUpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAddNewLeadFollowUp(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addNewLeadFollowUp,
  addNewLeadFollowUpSuccess,
  addNewLeadFollowUpFailure,
  clearAddNewLeadFollowUp,
} = addNewLeadFollowUpSlice.actions;

export default addNewLeadFollowUpSlice.reducer;
