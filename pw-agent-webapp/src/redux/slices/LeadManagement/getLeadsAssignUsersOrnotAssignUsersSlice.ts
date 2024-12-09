import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadsAssignUsersOrnotAssignUsers {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadsAssignUsersOrnotAssignUsers = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsAssignUsersOrnotAssignUsersSlice = createSlice({
  name: "getLeadsAssignUsersOrnotAssignUsersSlice",
  initialState,
  reducers: {
    getLeadsAssignUsersOrnotAssignUsers(state) {
      state.loading = true;
    },
    getLeadsAssignUsersOrnotAssignUsersSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsAssignUsersOrnotAssignUsersFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetLeadsAssignUsersOrnotAssignUsers(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getLeadsAssignUsersOrnotAssignUsers,
  getLeadsAssignUsersOrnotAssignUsersSuccess,
  getLeadsAssignUsersOrnotAssignUsersFailure,
  clearGetLeadsAssignUsersOrnotAssignUsers,
} = getLeadsAssignUsersOrnotAssignUsersSlice.actions;

export default getLeadsAssignUsersOrnotAssignUsersSlice.reducer;
