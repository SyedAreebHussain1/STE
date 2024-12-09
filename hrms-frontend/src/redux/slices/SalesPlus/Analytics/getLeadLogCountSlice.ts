import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadLogCountType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadLogCountType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadLogCountSlice = createSlice({
  name: "getLeadLogCountSlice",
  initialState,
  reducers: {
    getLeadLogCount(state) {
      state.loading = true;
    },
    getLeadLogCountSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadLogCountFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetLeadLogCount(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadLogCount,
  getLeadLogCountSuccess,
  getLeadLogCountFailure,
  cleargetLeadLogCount,
} = getLeadLogCountSlice.actions;

export default getLeadLogCountSlice.reducer;
