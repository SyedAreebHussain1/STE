import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ideaValidationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ideaValidationType = {
  data: null,
  loading: false,
  error: null,
};

const ideaValidationSlice = createSlice({
  name: "ideaValidationSlice",
  initialState,
  reducers: {
    ideaValidation(state) {
      state.loading = true;
    },
    ideaValidationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ideaValidationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    ideaValidation,
    ideaValidationSuccess,
    ideaValidationFailure,
} = ideaValidationSlice.actions;

export default ideaValidationSlice.reducer;
