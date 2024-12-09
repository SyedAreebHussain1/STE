import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadsLeadByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadsLeadByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsLeadByIdSlice = createSlice({
  name: "getLeadsLeadByIdSlice",
  initialState,
  reducers: {
    getLeadsLeadById(state) {
      state.loading = true;
    },
    getLeadsLeadByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsLeadByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadsLeadById(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getLeadsLeadById,
    getLeadsLeadByIdSuccess,
    getLeadsLeadByIdFailure,
    clearGetLeadsLeadById,
} = getLeadsLeadByIdSlice.actions;

export default getLeadsLeadByIdSlice.reducer;
