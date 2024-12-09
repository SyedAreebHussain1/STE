import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getCompanyLocationtype {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getCompanyLocationtype = {
  data: null,
  loading: false,
  error: null,
};

const getCompanyLocationSlice = createSlice({
  name: "getCompanyLocation",
  initialState,
  reducers: {
    getCompanyLocation(state) {
      state.loading = true;
    },
    getCompanyLocationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getCompanyLocationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanyLocation,
  getCompanyLocationSuccess,
  getCompanyLocationFailure,
} = getCompanyLocationSlice.actions;

export default getCompanyLocationSlice.reducer;
