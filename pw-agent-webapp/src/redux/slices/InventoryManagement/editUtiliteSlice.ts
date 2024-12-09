import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editUtilite {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editUtilite = {
  data: null,
  loading: false,
  error: null,
};

const editUtiliteSlice = createSlice({
  name: "editUtilite",
  initialState,
  reducers: {
    editUtilite(state) {
      state.loading = true;
    },
    editUtiliteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editUtiliteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { editUtilite, editUtiliteSuccess, editUtiliteFailure } =
  editUtiliteSlice.actions;

export default editUtiliteSlice.reducer;
