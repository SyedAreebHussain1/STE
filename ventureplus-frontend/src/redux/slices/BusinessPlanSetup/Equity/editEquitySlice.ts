import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editEquityType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editEquityType = {
  data: null,
  loading: false,
  error: null,
};

const editEquitySlice = createSlice({
  name: "editEquitySlice",
  initialState,
  reducers: {
    editEquity(state) {
      state.loading = true;
    },
    editEquitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editEquityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { editEquity, editEquitySuccess, editEquityFailure } =
  editEquitySlice.actions;

export default editEquitySlice.reducer;
