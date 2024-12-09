import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAgencyByAgencyCodeType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAgencyByAgencyCodeType = {
  data: null,
  loading: false,
  error: null,
};

const getAgencyByAgencyCodeSlice = createSlice({
  name: "getAgencyByAgencyCodeSlice",
  initialState,
  reducers: {
    getAgencyByAgencyCode(state) {
      state.loading = true;
    },
    getAgencyByAgencyCodeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAgencyByAgencyCodeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAgencyByAgencyCode,
  getAgencyByAgencyCodeSuccess,
  getAgencyByAgencyCodeFailure,
} = getAgencyByAgencyCodeSlice.actions;
export default getAgencyByAgencyCodeSlice.reducer;
