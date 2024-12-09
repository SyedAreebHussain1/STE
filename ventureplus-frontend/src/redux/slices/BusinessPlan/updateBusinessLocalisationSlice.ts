import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateBusinessLocalisationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateBusinessLocalisationType = {
  data: null,
  loading: false,
  error: null,
};

const updateBusinessLocalisationSlice = createSlice({
  name: "updateBusinessLocalisationSlice",
  initialState,
  reducers: {
    updateBusinessLocalisation(state) {
      state.loading = true;
    },
    updateBusinessLocalisationSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    updateBusinessLocalisationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateBusinessLocalisation,
  updateBusinessLocalisationSuccess,
  updateBusinessLocalisationFailure,
} = updateBusinessLocalisationSlice.actions;

export default updateBusinessLocalisationSlice.reducer;
