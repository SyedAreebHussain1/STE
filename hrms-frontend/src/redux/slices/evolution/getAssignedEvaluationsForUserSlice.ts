import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAssignedEvaluationsForUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAssignedEvaluationsForUserType = {
  data: null,
  loading: false,
  error: null,
};

const getAssignedEvaluationsForUserSlice = createSlice({
  name: "getAssignedEvaluationsForUserSlice",
  initialState,
  reducers: {
    getAssignedEvaluationsForUser(state) {
      state.loading = true;
    },
    getAssignedEvaluationsForUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAssignedEvaluationsForUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAssignedEvaluationsForUser,
  getAssignedEvaluationsForUserSuccess,
  getAssignedEvaluationsForUserFailure,
} = getAssignedEvaluationsForUserSlice.actions;

export default getAssignedEvaluationsForUserSlice.reducer;
