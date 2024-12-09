import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AffilateUserProfileType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AffilateUserProfileType = {
  data: null,
  loading: false,
  error: null,
};

const affilateUserProfileSlice = createSlice({
  name: "affilateUserProfileSlice",
  initialState,
  reducers: {
    affilateUserProfile(state) {
      state.loading = true;
    },
    affilateUserProfileSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    affilateUserProfileFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAffilateUserProfile(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    affilateUserProfileUpdate(state) {
      state.loading = true;
    },
    affilateUserProfileUpdateSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    affilateUserProfileUpdateFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
    },
    clearAffilateUserProfileUpdate(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  affilateUserProfile,
  affilateUserProfileSuccess,
  affilateUserProfileFailure,
  clearAffilateUserProfile,

  affilateUserProfileUpdate,
  affilateUserProfileUpdateSuccess,
  affilateUserProfileUpdateFailure,
  clearAffilateUserProfileUpdate,
} = affilateUserProfileSlice.actions;

export default affilateUserProfileSlice.reducer;
