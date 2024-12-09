import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetEnumsforleadInvntoryModule {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetEnumsforleadInvntoryModule = {
  data: null,
  loading: false,
  error: null,
};

const getEnumsforleadInvntoryModuleSlice = createSlice({
  name: "getEnumsforleadInvntoryModuleSlice",
  initialState,
  reducers: {
    getEnumsforleadInvntoryModule(state) {
      state.loading = true;
    },
    getEnumsforleadInvntoryModuleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEnumsforleadInvntoryModuleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getEnumsforleadInvntoryModule,
  getEnumsforleadInvntoryModuleSuccess,
  getEnumsforleadInvntoryModuleFailure,
} = getEnumsforleadInvntoryModuleSlice.actions;

export default getEnumsforleadInvntoryModuleSlice.reducer;
