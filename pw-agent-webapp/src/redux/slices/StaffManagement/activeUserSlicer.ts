import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface activeUser {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: activeUser = {
  data: null,
  loading: false,
  error: null,
};

const activeUserSlicer = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    activeUser(state) {
      state.loading = true;
    },
    activeUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    activeUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { activeUser, activeUserSuccess, activeUserFailure } =
  activeUserSlicer.actions;

export default activeUserSlicer.reducer;
