import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetModuleBYRoleIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetModuleBYRoleIdType = {
  data: null,
  loading: false,
  error: null,
};

const getModuleBYRoleIdSlice = createSlice({
  name: "getModuleBYRoleIdSlice",
  initialState,
  reducers: {
    getModuleBYRoleId(state) {
      state.loading = true;
    },
    getModuleBYRoleIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getModuleBYRoleIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getModuleBYRoleId,
  getModuleBYRoleIdSuccess,
  getModuleBYRoleIdFailure,
} = getModuleBYRoleIdSlice.actions;
export default getModuleBYRoleIdSlice.reducer;
