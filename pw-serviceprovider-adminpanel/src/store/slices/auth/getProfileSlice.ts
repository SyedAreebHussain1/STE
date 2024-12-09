import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProfileType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProfileType = {
  data: null,
  loading: false,
  error: null,
};

const getProfileSlice = createSlice({
  name: "getProfileSlice",
  initialState,
  reducers: {
    getProfile(state) {
      state.loading = true;
    },
    getProfileSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProfileFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getProfile, getProfileSuccess, getProfileFailure } =
  getProfileSlice.actions;
export default getProfileSlice.reducer;
