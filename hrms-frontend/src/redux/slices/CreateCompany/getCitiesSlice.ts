import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCities {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCities = {
  data: null,
  loading: false,
  error: null,
};

const getCitiesSlice = createSlice({
  name: "getCities",
  initialState,
  reducers: {
    getCities(state) {
      state.loading = true;
    },
    getCitiesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCitiesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getCities, getCitiesSuccess, getCitiesFailure } =
  getCitiesSlice.actions;

export default getCitiesSlice.reducer;
