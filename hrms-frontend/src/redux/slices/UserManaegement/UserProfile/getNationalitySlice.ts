import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getNationality {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getNationality = {
  data: null,
  loading: false,
  error: null,
};

const getNationalitySlice = createSlice({
  name: "getNationalitySlice",
  initialState,
  reducers: {
    getNationality(state) {
      state.loading = true;
    },
    getNationalitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getNationalityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getNationality, getNationalitySuccess, getNationalityFailure } =
  getNationalitySlice.actions;

export default getNationalitySlice.reducer;
