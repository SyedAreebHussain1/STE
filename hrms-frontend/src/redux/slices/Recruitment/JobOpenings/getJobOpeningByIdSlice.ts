import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getJobOpeningByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getJobOpeningByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getJobOpeningByIdSlice = createSlice({
  name: "getJobOpeningByIdSlice",
  initialState,
  reducers: {
    getJobOpeningById(state) {
      state.loading = true;
    },
    getJobOpeningByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getJobOpeningByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getJobOpeningById,
  getJobOpeningByIdSuccess,
  getJobOpeningByIdFailure,
} = getJobOpeningByIdSlice.actions;

export default getJobOpeningByIdSlice.reducer;
