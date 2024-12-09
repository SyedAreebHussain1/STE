import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessType = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessTypeSlice = createSlice({
  name: "getBusinessType",
  initialState,
  reducers: {
    getBusinessType(state) {
      state.loading = true;
    },
    getBusinessTypeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessTypeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessType,
  getBusinessTypeSuccess,
  getBusinessTypeFailure,
} = getBusinessTypeSlice.actions;

export default getBusinessTypeSlice.reducer;
