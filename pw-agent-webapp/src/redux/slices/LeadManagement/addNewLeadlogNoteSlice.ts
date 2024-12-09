import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AddNewLeadlogNote {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddNewLeadlogNote = {
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
  },
});

export const {
  addNewLeadlogNote,
  addNewLeadlogNoteSuccess,
  addNewLeadlogNoteFailure,
} = addNewLeadlogNoteSlice.actions;

export default addNewLeadlogNoteSlice.reducer;
