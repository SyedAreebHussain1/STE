import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getWebsite {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getWebsite = {
  data: null,
  loading: false,
  error: null,
};

const getWebsiteSlice = createSlice({
  name: "getWebsite",
  initialState,
  reducers: {
    getWebsite(state) {
      state.loading = true;
    },
    getWebsiteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getWebsiteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getWebsite, getWebsiteSuccess, getWebsiteFailure } =
  getWebsiteSlice.actions;

export default getWebsiteSlice.reducer;
