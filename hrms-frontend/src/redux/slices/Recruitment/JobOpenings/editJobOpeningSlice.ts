import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editJobOpeningType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editJobOpeningType = {
  data: null,
  loading: false,
  error: null,
};

const editJobOpeningSlice = createSlice({
  name: "editJobOpeningSlice",
  initialState,
  reducers: {
    editJobOpening(state) {
      state.loading = true;
    },
    editJobOpeningSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editJobOpeningFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    editJobOpening,
  editJobOpeningSuccess,
  editJobOpeningFailure,
} = editJobOpeningSlice.actions;

export default editJobOpeningSlice.reducer;
