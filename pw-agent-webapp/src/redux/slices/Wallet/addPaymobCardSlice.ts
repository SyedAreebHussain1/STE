import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addPaymobCard {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addPaymobCard = {
  data: null,
  loading: false,
  error: null,
};

const addPaymobCardSlice = createSlice({
  name: "addPaymobCard",
  initialState,
  reducers: {
    addPaymobCard(state) {
      state.loading = true;
    },
    addPaymobCardSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addPaymobCardFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { addPaymobCard, addPaymobCardSuccess, addPaymobCardFailure } =
  addPaymobCardSlice.actions;

export default addPaymobCardSlice.reducer;
