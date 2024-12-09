import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getModuleType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getModuleType = {
  data: null,
  loading: false,
  error: null,
};

const getModuleSlice = createSlice({
  name: "getModuleSlice",
  initialState,
  reducers: {
    getModule(state) {
      state.loading = true;
    },
    getModuleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getModuleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetModule: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
});

export const {
  getModule,
  getModuleSuccess,
  getModuleFailure,
  clearGetModule
} = getModuleSlice.actions;
export default getModuleSlice.reducer;
