import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateProfileType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateProfileType = {
  data: null,
  loading: false,
  error: null,
};

const updateProfileSlice = createSlice({
  name: "updateProfileSlice",
  initialState,
  reducers: {
    updateProfile(state) {
      state.loading = true;
    },
    updateProfileSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateProfileFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { updateProfile, updateProfileSuccess, updateProfileFailure } =
  updateProfileSlice.actions;
export default updateProfileSlice.reducer;
