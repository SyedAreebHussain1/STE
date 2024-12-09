import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetAllLeadsFollowUp {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllLeadsFollowUp = {
  data: null,
  loading: false,
  error: null,
};

const getAllLeadsFollowUpSlice = createSlice({
  name: "getAllLeadsFollowUpSlice",
  initialState,
  reducers: {
    getAllLeadsFollowUp(state) {
      state.loading = true;
    },
    getAllLeadsFollowUpSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllLeadsFollowUpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllLeadsFollowUp,
  getAllLeadsFollowUpSuccess,
  getAllLeadsFollowUpFailure,
} = getAllLeadsFollowUpSlice.actions;

export default getAllLeadsFollowUpSlice.reducer;
