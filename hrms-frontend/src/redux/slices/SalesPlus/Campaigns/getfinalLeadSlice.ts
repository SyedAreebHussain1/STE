import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetfinalLeadType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetfinalLeadType = {
  data: null,
  loading: false,
  error: null,
};

const getfinalLeadSlice = createSlice({
  name: "getfinalLeadSlice",
  initialState,
  reducers: {
    getfinalLeadUsers(state) {
      state.loading = true;
    },
    getfinalLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getfinalLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetfinalLead(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getfinalLeadUsers,
  getfinalLeadSuccess,
  getfinalLeadFailure,
  clearGetfinalLead,
} = getfinalLeadSlice.actions;

export default getfinalLeadSlice.reducer;
