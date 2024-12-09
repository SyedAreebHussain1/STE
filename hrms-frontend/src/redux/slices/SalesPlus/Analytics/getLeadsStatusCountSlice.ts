import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeadsStatusCountType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeadsStatusCountType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsStatusCountSlice = createSlice({
  name: "getLeadsStatusCountSlice",
  initialState,
  reducers: {
    getLeadsStatusCount(state) {
      state.loading = true;
    },
    getLeadsStatusCountSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsStatusCountFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetLeadsStatusCount(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadsStatusCount,
  getLeadsStatusCountSuccess,
  getLeadsStatusCountFailure,
  cleargetLeadsStatusCount,
} = getLeadsStatusCountSlice.actions;

export default getLeadsStatusCountSlice.reducer;
