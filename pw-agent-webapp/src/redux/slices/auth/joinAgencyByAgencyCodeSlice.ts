import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface joinAgencyByAgencyCodeType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: joinAgencyByAgencyCodeType = {
  data: null,
  loading: false,
  error: null,
};

const joinAgencyByAgencyCodeSlice = createSlice({
  name: "joinAgencyByAgencyCodeSlice",
  initialState,
  reducers: {
    joinAgencyByAgencyCode(state) {
      state.loading = true;
    },
    joinAgencyByAgencyCodeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    joinAgencyByAgencyCodeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  joinAgencyByAgencyCode,
  joinAgencyByAgencyCodeSuccess,
  joinAgencyByAgencyCodeFailure,
} = joinAgencyByAgencyCodeSlice.actions;
export default joinAgencyByAgencyCodeSlice.reducer;
