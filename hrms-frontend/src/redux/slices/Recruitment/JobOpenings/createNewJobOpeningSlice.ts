import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateNewJobOpeningType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateNewJobOpeningType = {
  data: null,
  loading: false,
  error: null,
};

const createNewJobOpeningSlice = createSlice({
  name: "createNewJobOpeningSlice",
  initialState,
  reducers: {
    createNewJobOpening(state) {
      state.loading = true;
    },
    createNewJobOpeningSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createNewJobOpeningFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createNewJobOpening,
  createNewJobOpeningSuccess,
  createNewJobOpeningFailure,
} = createNewJobOpeningSlice.actions;

export default createNewJobOpeningSlice.reducer;
