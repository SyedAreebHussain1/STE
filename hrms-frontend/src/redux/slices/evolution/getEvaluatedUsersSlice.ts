import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetEvaluatedUsersType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetEvaluatedUsersType = {
  data: null,
  loading: false,
  error: null,
};

const getEvaluatedUsersSlice = createSlice({
  name: "getEvaluatedUsersSlice",
  initialState,
  reducers: {
    getEvaluatedUsers(state) {
      state.loading = true;
    },
    getEvaluatedUsersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getEvaluatedUsersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetEvaluatedUsers(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getEvaluatedUsers,
  getEvaluatedUsersSuccess,
  getEvaluatedUsersFailure,
  clearGetEvaluatedUsers,
} = getEvaluatedUsersSlice.actions;

export default getEvaluatedUsersSlice.reducer;
