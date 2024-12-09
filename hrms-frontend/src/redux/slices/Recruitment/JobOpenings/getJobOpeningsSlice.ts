import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getJobOpeningsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getJobOpeningsType = {
  data: null,
  loading: false,
  error: null,
};

const getJobOpeningsSlice = createSlice({
  name: "getJobOpeningsSlice",
  initialState,
  reducers: {
    getJobOpenings(state) {
      state.loading = true;
    },
    getJobOpeningsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getJobOpeningsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getJobOpenings,
  getJobOpeningsSuccess,
  getJobOpeningsFailure,
} = getJobOpeningsSlice.actions;

export default getJobOpeningsSlice.reducer;
