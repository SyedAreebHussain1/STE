import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAgencyCode {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAgencyCode = {
  data: null,
  loading: false,
  error: null,
};

const getAgencyCodeSlicer = createSlice({
  name: "getAgencyCode",
  initialState,
  reducers: {
    getAgencyCode(state) {
      state.loading = true;
    },
    getAgencyCodeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgencyCodeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAgencyCode, getAgencyCodeSuccess, getAgencyCodeFailure } =
  getAgencyCodeSlicer.actions;

export default getAgencyCodeSlicer.reducer;
