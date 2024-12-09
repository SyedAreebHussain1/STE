import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateEvaluationsForUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateEvaluationsForUserType = {
  data: null,
  loading: false,
  error: null,
};

const updateEvaluationsForUserSlice = createSlice({
  name: "updateEvaluationsForUserSlice",
  initialState,
  reducers: {
    updateEvaluationsForUser(state) {
      state.loading = true;
    },
    updateEvaluationsForUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateEvaluationsForUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateEvaluationsForUser,
  updateEvaluationsForUserSuccess,
  updateEvaluationsForUserFailure,
} = updateEvaluationsForUserSlice.actions;

export default updateEvaluationsForUserSlice.reducer;
