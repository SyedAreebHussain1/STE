import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createAgencyType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createAgencyType = {
  data: null,
  loading: false,
  error: null,
};

const createAgencySlice = createSlice({
  name: "createAgencySlice",
  initialState,
  reducers: {
    createAgency(state) {
      state.loading = true;
    },
    createAgencySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createAgencyFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createAgency, createAgencySuccess, createAgencyFailure } =
  createAgencySlice.actions;
export default createAgencySlice.reducer;
