import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AssignUserNewType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AssignUserNewType = {
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
    clearAssignUserNew(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  assignUserNew,
  assignUserNewSuccess,
  assignUserNewFailure,
  clearAssignUserNew,
} = assignUserNewSlice.actions;

export default assignUserNewSlice.reducer;
