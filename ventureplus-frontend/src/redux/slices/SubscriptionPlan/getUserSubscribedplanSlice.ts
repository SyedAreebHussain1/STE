import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUserSubscribedplan {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUserSubscribedplan = {
  data: null,
  loading: false,
  error: null,
};

const getUserSubscribedplanSlice = createSlice({
  name: "getUserSubscribedplanSlice",
  initialState,
  reducers: {
    getUserSubscribedplan(state) {
      state.loading = true;
    },
    getUserSubscribedplanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUserSubscribedplanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargetUserSubscribedplan(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getUserSubscribedplan,
  getUserSubscribedplanSuccess,
  getUserSubscribedplanFailure,
  cleargetUserSubscribedplan,
} = getUserSubscribedplanSlice.actions;

export default getUserSubscribedplanSlice.reducer;
