import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteTaskNoteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteTaskNoteType = {
  data: null,
  loading: false,
  error: null,
};

const deleteTaskNoteSlice = createSlice({
  name: "deleteTaskNoteSlice",
  initialState,
  reducers: {
    deleteTaskNote(state) {
      state.loading = true;
    },
    deleteTaskNoteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteTaskNoteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteTaskNote, deleteTaskNoteSuccess, deleteTaskNoteFailure } =
  deleteTaskNoteSlice.actions;

export default deleteTaskNoteSlice.reducer;
