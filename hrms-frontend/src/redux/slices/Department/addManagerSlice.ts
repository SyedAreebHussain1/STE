import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addManagerType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addManagerType = {
  data: null,
  loading: false,
  error: null,
};

const addManagerSlice = createSlice({
  name: "addManagerSlice",
  initialState,
  reducers: {
    addManager(state) {
      state.loading = true;
    },
    addManagerSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addManagerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addManager,
  addManagerSuccess,
  addManagerFailure,
} = addManagerSlice.actions;

export default addManagerSlice.reducer;
