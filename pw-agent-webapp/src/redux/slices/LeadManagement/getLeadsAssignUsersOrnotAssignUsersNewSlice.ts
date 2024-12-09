import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadsAssignUsersOrnotAssignUsersNew {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadsAssignUsersOrnotAssignUsersNew = {
  data: null,
  loading: false,
  error: null,
};

const getLeadsAssignUsersOrnotAssignUsersNewSlice = createSlice({
  name: "getLeadsAssignUsersOrnotAssignUsersNewSlice",
  initialState,
  reducers: {
    getLeadsAssignUsersOrnotAssignUsersNew(state) {
      state.loading = true;
    },
    getLeadsAssignUsersOrnotAssignUsersNewSuccess(
      state,
      action: PayloadAction<any>,
    ) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeadsAssignUsersOrnotAssignUsersNewFailure(
      state,
      action: PayloadAction<any>,
    ) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getLeadsAssignUsersOrnotAssignUsersNew,
  getLeadsAssignUsersOrnotAssignUsersNewSuccess,
  getLeadsAssignUsersOrnotAssignUsersNewFailure,
} = getLeadsAssignUsersOrnotAssignUsersNewSlice.actions;

export default getLeadsAssignUsersOrnotAssignUsersNewSlice.reducer;
