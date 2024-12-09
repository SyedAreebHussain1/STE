import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cancelPwSubPackageType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: cancelPwSubPackageType = {
  data: null,
  loading: false,
  error: null,
};

const cancelPwSubPackageSlice = createSlice({
  name: "cancelPwSubPackageSlice",
  initialState,
  reducers: {
    cancelPwSubPackage(state) {
      state.loading = true;
    },
    cancelPwSubPackageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    cancelPwSubPackageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearcancelPwSubPackage(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  cancelPwSubPackage,
  cancelPwSubPackageSuccess,
  cancelPwSubPackageFailure,
  clearcancelPwSubPackage,
} = cancelPwSubPackageSlice.actions;

export default cancelPwSubPackageSlice.reducer;
