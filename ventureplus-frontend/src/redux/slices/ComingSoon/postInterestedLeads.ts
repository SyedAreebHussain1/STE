import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postInterestedLeadsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postInterestedLeadsType = {
  data: null,
  loading: false,
  error: null,
};

const postInterestedLeadsSlice = createSlice({
  name: "postInterestedLeadsSlice",
  initialState,
  reducers: {
    postInterestedLeads(state) {
      state.loading = true;
    },
    postInterestedLeadsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postInterestedLeadsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postInterestedLeads,
  postInterestedLeadsSuccess,
  postInterestedLeadsFailure,
} = postInterestedLeadsSlice.actions;

export default postInterestedLeadsSlice.reducer;
