import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editTaskNoteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editTaskNoteType = {
  data: null,
  loading: false,
  error: null,
};

const editTaskNoteSlice = createSlice({
  name: "editTaskNoteSlice",
  initialState,
  reducers: {
    editTaskNote(state) {
      state.loading = true;
    },
    editTaskNoteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editTaskNoteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { editTaskNote, editTaskNoteSuccess, editTaskNoteFailure } =
  editTaskNoteSlice.actions;

export default editTaskNoteSlice.reducer;
