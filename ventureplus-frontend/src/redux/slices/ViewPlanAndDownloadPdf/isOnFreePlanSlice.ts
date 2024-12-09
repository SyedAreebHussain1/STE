import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface isOnFreePlan {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: isOnFreePlan = {
  data: null,
  loading: false,
  error: null,
};

const isOnFreePlanSlice = createSlice({
  name: "isOnFreePlanSlice",
  initialState,
  reducers: {
    isOnFreePlan(state) {
      state.loading = true;
    },
    isOnFreePlanSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    isOnFreePlanFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { isOnFreePlan, isOnFreePlanSuccess, isOnFreePlanFailure } =
  isOnFreePlanSlice.actions;

export default isOnFreePlanSlice.reducer;
