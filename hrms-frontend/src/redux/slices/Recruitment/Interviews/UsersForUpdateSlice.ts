import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersForUpdateType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UsersForUpdateType = {
  data: null,
  loading: false,
  error: null,
};

const UsersForUpdateSlice = createSlice({
  name: "UsersForUpdateSlice",
  initialState,
  reducers: {
    usersForUpdate(state) {
      state.loading = true;
    },
    usersForUpdateSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    usersForUpdateFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { usersForUpdate, usersForUpdateSuccess, usersForUpdateFailure } =
  UsersForUpdateSlice.actions;

export default UsersForUpdateSlice.reducer;
