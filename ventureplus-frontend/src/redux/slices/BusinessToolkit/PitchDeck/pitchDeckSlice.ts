import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pitchDeckType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: pitchDeckType = {
  data: null,
  loading: false,
  error: null,
};

const pitchDeckSlice = createSlice({
  name: "pitchDeckSlice",
  initialState,
  reducers: {
    postPitchDeck(state) {
      state.loading = true;
    },
    postPitchDeckSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state.data = action.payload;
      state.loading = false;
    },
    postPitchDeckFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { postPitchDeck, postPitchDeckSuccess, postPitchDeckFailure } =
  pitchDeckSlice.actions;

export default pitchDeckSlice.reducer;
