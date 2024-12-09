import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getFacebookAdd {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getFacebookAdd = {
  data: null,
  loading: false,
  error: null,
};

const getFacebookAddSetSlice = createSlice({
  name: "getFacebookAddSet",
  initialState,
  reducers: {
    getFacebookAddSet(state) {
      state.loading = true;
    },
    getFacebookAddSetSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getFacebookAddSetFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    CleargetFacebookAddSet(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getFacebookAddSet,
  getFacebookAddSetSuccess,
  getFacebookAddSetFailure,
  CleargetFacebookAddSet,
} = getFacebookAddSetSlice.actions;

export default getFacebookAddSetSlice.reducer;
