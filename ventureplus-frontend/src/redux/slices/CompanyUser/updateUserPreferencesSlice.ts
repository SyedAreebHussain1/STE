import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateUserPreferencesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateUserPreferencesType = {
  data: null,
  loading: false,
  error: null,
};

const updateUserPreferencesSlice = createSlice({
  name: "updateUserPreferencesSlice",
  initialState,
  reducers: {
    updateUserPreferences(state) {
      state.loading = true;
    },
    updateUserPreferencesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserPreferencesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserPreferences,
  updateUserPreferencesSuccess,
  updateUserPreferencesFailure,
} = updateUserPreferencesSlice.actions;

export default updateUserPreferencesSlice.reducer;
