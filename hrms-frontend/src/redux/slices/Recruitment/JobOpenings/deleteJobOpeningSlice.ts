import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteJobOpeningType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteJobOpeningType = {
  data: null,
  loading: false,
  error: null,
};

const deleteJobOpeningSlice = createSlice({
  name: "deleteJobOpeningSlice",
  initialState,
  reducers: {
    deleteJobOpening(state) {
      state.loading = true;
    },
    deleteJobOpeningSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteJobOpeningFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteJobOpening,
  deleteJobOpeningSuccess,
  deleteJobOpeningFailure,
} = deleteJobOpeningSlice.actions;

export default deleteJobOpeningSlice.reducer;
