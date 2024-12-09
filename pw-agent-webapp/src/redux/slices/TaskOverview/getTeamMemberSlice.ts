import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetTeamMemberType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetTeamMemberType = {
  data: null,
  loading: false,
  error: null,
};

const getTeamMemberSlice = createSlice({
  name: "getTeamMemberSlice",
  initialState,
  reducers: {
    getTeamMember(state) {
      state.loading = true;
    },
    getTeamMemberSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTeamMemberFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTeamMember(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getTeamMember,
  getTeamMemberSuccess,
  getTeamMemberFailure,
  clearGetTeamMember,
} = getTeamMemberSlice.actions;

export default getTeamMemberSlice.reducer;
