import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addOnPayType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addOnPayType = {
  data: null,
  loading: false,
  error: null,
};

const addOnPaySlice = createSlice({
  name: "addOnPaySlice",
  initialState,
  reducers: {
    addOnPay(state) {
      state.loading = true;
    },
    addOnPaySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addOnPayFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { addOnPay, addOnPaySuccess, addOnPayFailure } =
  addOnPaySlice.actions;

export default addOnPaySlice.reducer;
