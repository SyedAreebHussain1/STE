import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLeaveMembersByPolicyIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLeaveMembersByPolicyIdType = {
  data: null,
  loading: false,
  error: null,
};

const getLeaveMembersByPolicyIdSlice = createSlice({
  name: "getLeaveMembersByPolicyIdSlice",
  initialState,
  reducers: {
    getLeaveMembersByPolicyId(state) {
      state.loading = true;
    },
    getLeaveMembersByPolicyIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLeaveMembersByPolicyIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    getLeaveMembersByPolicyId,
    getLeaveMembersByPolicyIdSuccess,
    getLeaveMembersByPolicyIdFailure,
} = getLeaveMembersByPolicyIdSlice.actions;
export default getLeaveMembersByPolicyIdSlice.reducer;
