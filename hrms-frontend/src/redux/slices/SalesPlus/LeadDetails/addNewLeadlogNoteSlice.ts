import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddNewLeadlogNoteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddNewLeadlogNoteType = {
  data: null,
  loading: false,
  error: null,
};

const addNewLeadlogNoteSlice = createSlice({
  name: "addNewLeadlogNoteSlice",
  initialState,
  reducers: {
    addNewLeadlogNote(state) {
      state.loading = true;
    },
    addNewLeadlogNoteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addNewLeadlogNoteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAddNewLeadlogNote(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    addNewLeadlogNote,
    addNewLeadlogNoteSuccess,
    addNewLeadlogNoteFailure,
    clearAddNewLeadlogNote,
} = addNewLeadlogNoteSlice.actions;

export default addNewLeadlogNoteSlice.reducer;
