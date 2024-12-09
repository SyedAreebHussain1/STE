import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface patchCompanyLocationtype {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: patchCompanyLocationtype = {
  data: null,
  loading: false,
  error: null,
};

const patchCompanyLocationSlice = createSlice({
  name: "patchCompanyLocation",
  initialState,
  reducers: {
    patchCompanyLocation(state) {
      state.loading = true;
    },
    patchCompanyLocationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    patchCompanyLocationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  patchCompanyLocation,
  patchCompanyLocationSuccess,
  patchCompanyLocationFailure,
} = patchCompanyLocationSlice.actions;

export default patchCompanyLocationSlice.reducer;
