import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllLead {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllLead = {
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
  },
});

export const { getLeadlog, getLeadlogSuccess, getLeadlogFailure } =
  getLeadlogSlice.actions;

export default getLeadlogSlice.reducer;
