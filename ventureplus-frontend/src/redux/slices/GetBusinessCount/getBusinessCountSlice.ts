import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessCount {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessCount = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessCountSlice = createSlice({
  name: "getBusinessCount",
  initialState,
  reducers: {
    getBusinessCount(state) {
      state.loading = true;
    },
    getBusinessCountSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessCountFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessCount,
  getBusinessCountSuccess,
  getBusinessCountFailure,
} = getBusinessCountSlice.actions;

export default getBusinessCountSlice.reducer;
