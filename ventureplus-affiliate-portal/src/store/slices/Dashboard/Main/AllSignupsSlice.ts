import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface allSignups {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: allSignups = {
  data: null,
  loading: false,
  error: null,
};

const allSignupsSlice = createSlice({
  name: "allSignups",
  initialState,
  reducers: {
    getAllSignups(state) {
      state.loading = true;
    },
    getAllSignupsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllSignupsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllSignups, getAllSignupsSuccess, getAllSignupsFailure } =
  allSignupsSlice.actions;

export default allSignupsSlice.reducer;
