import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getonBoardingRole {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getonBoardingRole = {
  data: null,
  loading: false,
  error: null,
};

const getonBoardingRoleSlice = createSlice({
  name: "getonBoardingRole",
  initialState,
  reducers: {
    getonBoardingRole(state) {
      state.loading = true;
    },
    getonBoardingRoleSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getonBoardingRoleFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getonBoardingRole,
  getonBoardingRoleSuccess,
  getonBoardingRoleFailure,
} = getonBoardingRoleSlice.actions;

export default getonBoardingRoleSlice.reducer;
