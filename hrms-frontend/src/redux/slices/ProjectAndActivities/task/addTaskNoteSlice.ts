import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface addTaskNoteType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addTaskNoteType = {
  data: null,
  loading: false,
  error: null,
};

const addTaskNoteSlice = createSlice({
  name: "addTaskNoteSlice",
  initialState,
  reducers: {
    addTaskNote(state) {
      state.loading = true;
    },
    addTaskNoteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addTaskNoteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { addTaskNote, addTaskNoteSuccess, addTaskNoteFailure } =
  addTaskNoteSlice.actions;

export default addTaskNoteSlice.reducer;
