import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getEquityById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getEquityById = {
  data: null,
  loading: false,
  error: null,
};

const getEquityByIdSlice = createSlice({
  name: "getEquityByIdSlice",
  initialState,
  reducers: {
    getEquityById(state) {
      state.loading = true;
    },
    getEquityByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEquityByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getEquityById,
  getEquityByIdSuccess,
  getEquityByIdFailure,
} = getEquityByIdSlice.actions;

export default getEquityByIdSlice.reducer;
