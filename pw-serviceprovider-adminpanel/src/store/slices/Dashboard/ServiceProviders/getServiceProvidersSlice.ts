import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetServiceProvidersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetServiceProvidersType = {
  data: null,
  loading: false,
  error: null,
};

const getServiceProvidersSlice = createSlice({
  name: "getServiceProvidersSlice",
  initialState,
  reducers: {
    getServiceProviders(state) {
      state.loading = true;
    },
    getServiceProvidersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getServiceProvidersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getServiceProviders,
  getServiceProvidersSuccess,
  getServiceProvidersFailure,
} = getServiceProvidersSlice.actions;

export default getServiceProvidersSlice.reducer;
