import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AssignUserNew {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AssignUserNew = {
  data: null,
  loading: false,
  error: null,
};

const assignUserNewSlice = createSlice({
  name: "assignUserNewSlice",
  initialState,
  reducers: {
    assignUserNew(state) {
      state.loading = true;
    },
    assignUserNewSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    assignUserNewFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { assignUserNew, assignUserNewSuccess, assignUserNewFailure } =
  assignUserNewSlice.actions;

export default assignUserNewSlice.reducer;
