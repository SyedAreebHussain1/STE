import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editAgencyProfile {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editAgencyProfile = {
  data: null,
  loading: false,
  error: null,
};

const editAgencyProfileSlice = createSlice({
  name: "editAgencyProfile",
  initialState,
  reducers: {
    editAgencyProfile(state) {
      state.loading = true;
    },
    editAgencyProfileSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editAgencyProfileFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editAgencyProfile,
  editAgencyProfileSuccess,
  editAgencyProfileFailure,
} = editAgencyProfileSlice.actions;

export default editAgencyProfileSlice.reducer;
