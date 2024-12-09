import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetServiceOrdersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetServiceOrdersType = {
  data: null,
  loading: false,
  error: null,
};

const getServiceOrdersSlice = createSlice({
  name: "getServiceOrdersSlice",
  initialState,
  reducers: {
    getServiceOrder(state) {
      state.loading = true;
    },
    getServiceOrderSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getServiceOrderFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getServiceOrder,
  getServiceOrderSuccess,
  getServiceOrderFailure,
} = getServiceOrdersSlice.actions;

export default getServiceOrdersSlice.reducer;
