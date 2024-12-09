import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Leads } from "../../../../types/lead";

interface LeadsState {
  data: Leads | null;
  loading: boolean;
  error: string | null;
}

const initialState: LeadsState = {
  data: null,
  loading: false,
  error: null,
};

const leadsSlice = createSlice({
  name: "leadsSlice",
  initialState,
  reducers: {
    getLeadsAdminSlice(state) {
      state.loading = true;
    },
    getLeadsAdminSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsAdminSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadsAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadsAdminSlice,
  getLeadsAdminSliceSuccess,
  getLeadsAdminSliceFailure,
  clearGetLeadsAdmin,
} = leadsSlice.actions;

export default leadsSlice.reducer;
