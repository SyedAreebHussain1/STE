import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadsSourceCountType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadsSourceCountType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsSourceCountSlice = createSlice({
  name: "getLeadsSourceCountSlice",
  initialState,
  reducers: {
    getLeadsSourceCount(state) {
      state.loading = true;
    },
    getLeadsSourceCountSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsSourceCountFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetLeadsSourceCount(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadsSourceCount,
  getLeadsSourceCountSuccess,
  getLeadsSourceCountFailure,
  cleargetLeadsSourceCount,
} = getLeadsSourceCountSlice.actions;

export default getLeadsSourceCountSlice.reducer;
