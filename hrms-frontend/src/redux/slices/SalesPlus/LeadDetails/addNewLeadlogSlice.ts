import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdNewLeadlogType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AdNewLeadlogType = {
  data: null,
  loading: false,
  error: null,
};

const addNewLeadlogSlice = createSlice({
  name: "addNewLeadlogSlice",
  initialState,
  reducers: {
    addNewLeadlog(state) {
      state.loading = true;
    },
    addNewLeadlogSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addNewLeadlogFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearaddNewLeadlog(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addNewLeadlog,
  addNewLeadlogSuccess,
  addNewLeadlogFailure,
  clearaddNewLeadlog,
} = addNewLeadlogSlice.actions;

export default addNewLeadlogSlice.reducer;
