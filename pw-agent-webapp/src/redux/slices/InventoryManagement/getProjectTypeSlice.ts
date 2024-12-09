import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectType = {
  data: null,
  loading: false,
  error: null,
};

const getProjectTypeSlice = createSlice({
  name: "getProjectType",
  initialState,
  reducers: {
    getProjectType(state) {
      state.loading = true;
    },
    getProjectTypeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectTypeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getProjectType, getProjectTypeSuccess, getProjectTypeFailure } =
  getProjectTypeSlice.actions;

export default getProjectTypeSlice.reducer;
