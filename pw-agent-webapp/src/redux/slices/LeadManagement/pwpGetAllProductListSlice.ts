import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadDataById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadDataById = {
  data: null,
  loading: false,
  error: null,
};

const pwpGetAllProductListSlice = createSlice({
  name: "pwpGetAllProductListSlice",
  initialState,
  reducers: {
    pwpGetAllProductList(state) {
      state.loading = true;
    },
    pwpGetAllProductListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    pwpGetAllProductListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  pwpGetAllProductList,
  pwpGetAllProductListSuccess,
  pwpGetAllProductListFailure,
} = pwpGetAllProductListSlice.actions;

export default pwpGetAllProductListSlice.reducer;
