import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadlogType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadlogType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadlogSlice = createSlice({
  name: "getLeadlogSlice",
  initialState,
  reducers: {
    getLeadlog(state) {
      state.loading = true;
    },
    getLeadlogSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadlogFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadlog(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getLeadlog,
    getLeadlogSuccess,
    getLeadlogFailure,
    clearGetLeadlog,
} = getLeadlogSlice.actions;

export default getLeadlogSlice.reducer;
