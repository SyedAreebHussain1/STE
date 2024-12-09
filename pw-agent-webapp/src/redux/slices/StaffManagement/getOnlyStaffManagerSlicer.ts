import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getOnlyStaffManager {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getOnlyStaffManager = {
  data: null,
  loading: false,
  error: null,
};

const getOnlyStaffManagerSlicer = createSlice({
  name: "getOnlyStaffManager",
  initialState,
  reducers: {
    getOnlyStaffManager(state) {
      state.loading = true;
    },
    getOnlyStaffManagerSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getOnlyStaffManagerFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getOnlyStaffManager,
  getOnlyStaffManagerSuccess,
  getOnlyStaffManagerFailure,
} = getOnlyStaffManagerSlicer.actions;

export default getOnlyStaffManagerSlicer.reducer;
