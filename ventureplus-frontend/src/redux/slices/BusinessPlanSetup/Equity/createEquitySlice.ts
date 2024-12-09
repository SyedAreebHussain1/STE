import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createEquityType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createEquityType = {
  data: null,
  loading: false,
  error: null,
};

const createEquitySlice = createSlice({
  name: "createEquitySlice",
  initialState,
  reducers: {
    createEquity(state) {
      state.loading = true;
    },
    createEquitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createEquityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createEquity, createEquitySuccess, createEquityFailure } =
  createEquitySlice.actions;

export default createEquitySlice.reducer;
