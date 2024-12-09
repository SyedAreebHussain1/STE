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

const getFacebookAddSlice = createSlice({
  name: "getFacebookAdd",
  initialState,
  reducers: {
    getFacebookAdd(state) {
      state.loading = true;
    },
    getFacebookAddSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getFacebookAddFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    CleargetFacebookAddFailure(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getFacebookAdd,
  getFacebookAddSuccess,
  getFacebookAddFailure,
  CleargetFacebookAddFailure,
} = getFacebookAddSlice.actions;

export default getFacebookAddSlice.reducer;
