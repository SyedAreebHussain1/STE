import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getcompanyUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getcompanyUserType = {
  data: null,
  loading: false,
  error: null,
};

const getcompanyUserTypeSlice = createSlice({
  name: "getcompanyUserTypeSlice",
  initialState,
  reducers: {
    getcompanyUserType(state) {
      state.loading = true;
    },
    getcompanyUserTypeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getcompanyUserTypeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getcompanyUserType,
  getcompanyUserTypeSuccess,
  getcompanyUserTypeFailure,
} = getcompanyUserTypeSlice.actions;

export default getcompanyUserTypeSlice.reducer;
