import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLanguages {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLanguages = {
  data: null,
  loading: false,
  error: null,
};

const getLanguagesSlice = createSlice({
  name: "getLanguages",
  initialState,
  reducers: {
    getLanguages(state) {
      state.loading = true;
    },
    getLanguagesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLanguagesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLanguages,
  getLanguagesSuccess,
  getLanguagesFailure,
} = getLanguagesSlice.actions;

export default getLanguagesSlice.reducer;
