import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateEquityMultipleEquitiesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateEquityMultipleEquitiesType = {
  data: null,
  loading: false,
  error: null,
};

const createEquityMultipleEquitiesSlice = createSlice({
  name: "createEquityMultipleEquitiesSlice",
  initialState,
  reducers: {
    createEquityMultipleEquities(state) {
      state.loading = true;
    },
    createEquityMultipleEquitiesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createEquityMultipleEquitiesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createEquityMultipleEquities,
  createEquityMultipleEquitiesSuccess,
  createEquityMultipleEquitiesFailure,
} = createEquityMultipleEquitiesSlice.actions;

export default createEquityMultipleEquitiesSlice.reducer;
