import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteEquityType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteEquityType = {
  data: null,
  loading: false,
  error: null,
};

const deleteEquitySlice = createSlice({
  name: "deleteEquitySlice",
  initialState,
  reducers: {
    deleteEquity(state) {
      state.loading = true;
    },
    deleteEquitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteEquityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteEquity, deleteEquitySuccess, deleteEquityFailure } =
  deleteEquitySlice.actions;

export default deleteEquitySlice.reducer;
