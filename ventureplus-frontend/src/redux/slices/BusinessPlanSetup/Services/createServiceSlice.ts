import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createServiceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createServiceType = {
  data: null,
  loading: false,
  error: null,
};

const createServiceSlice = createSlice({
  name: "createServiceSlice",
  initialState,
  reducers: {
    createService(state) {
      state.loading = true;
    },
    createServiceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createServiceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createService,
  createServiceSuccess,
  createServiceFailure,
} = createServiceSlice.actions;

export default createServiceSlice.reducer;
