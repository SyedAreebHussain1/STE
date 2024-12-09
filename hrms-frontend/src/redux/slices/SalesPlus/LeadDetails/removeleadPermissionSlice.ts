import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RemoveleadPermissionType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: RemoveleadPermissionType = {
  data: null,
  loading: false,
  error: null,
};

const removeleadPermissionSlice = createSlice({
  name: "removeleadPermissionSlice",
  initialState,
  reducers: {
    removeleadPermission(state) {
      state.loading = true;
    },
    removeleadPermissionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    removeleadPermissionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearRemoveleadPermission(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  removeleadPermission,
  removeleadPermissionSuccess,
  removeleadPermissionFailure,
  clearRemoveleadPermission,
} = removeleadPermissionSlice.actions;

export default removeleadPermissionSlice.reducer;
