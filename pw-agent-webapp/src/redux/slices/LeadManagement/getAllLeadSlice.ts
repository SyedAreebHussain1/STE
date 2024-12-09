import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllLead {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllLead = {
  data: null,
  loading: false,
  error: null,
};

const getAllLeadSlice = createSlice({
  name: "getAllLeadSlice",
  initialState,
  reducers: {
    getAllLead(state) {
      state.loading = true;
    },
    getAllLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllLead, getAllLeadSuccess, getAllLeadFailure } =
  getAllLeadSlice.actions;

export default getAllLeadSlice.reducer;
