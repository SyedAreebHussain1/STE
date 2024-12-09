import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadDataById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadDataById = {
  data: null,
  loading: false,
  error: null,
};

const getLeadDataByIdSlice = createSlice({
  name: "getLeadDataByIdSlice",
  initialState,
  reducers: {
    getLeadDataById(state) {
      state.loading = true;
    },
    getLeadDataByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadDataByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadDataById,
  getLeadDataByIdSuccess,
  getLeadDataByIdFailure,
} = getLeadDataByIdSlice.actions;

export default getLeadDataByIdSlice.reducer;
