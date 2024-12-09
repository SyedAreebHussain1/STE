import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAddOns {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAddOns = {
  data: null,
  loading: false,
  error: null,
};

const getAddOnsSlice = createSlice({
  name: "getAddOnsSlice",
  initialState,
  reducers: {
    getAddOns(state) {
      state.loading = true;
    },
    getAddOnsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAddOnsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetAddOns(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAddOns,
  getAddOnsSuccess,
  getAddOnsFailure,
  cleargetAddOns,
} = getAddOnsSlice.actions;

export default getAddOnsSlice.reducer;
