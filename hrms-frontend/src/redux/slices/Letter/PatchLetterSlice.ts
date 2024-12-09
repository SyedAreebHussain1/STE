import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatchLetterType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: PatchLetterType = {
  data: null,
  loading: false,
  error: null,
};

const PatchLetterSlice = createSlice({
  name: "PatchLetter",
  initialState,
  reducers: {
    PatchLetter(state) {
      state.loading = true;
    },
    PatchLetterSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    PatchLetterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { PatchLetter, PatchLetterSuccess, PatchLetterFailure } =
  PatchLetterSlice.actions;

export default PatchLetterSlice.reducer;
