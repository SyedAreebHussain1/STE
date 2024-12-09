import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectSubType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectSubType = {
  data: null,
  loading: false,
  error: null,
};

const getProjectSubTypeSlice = createSlice({
  name: "getProjectSubType",
  initialState,
  reducers: {
    getProjectSubType(state) {
      state.loading = true;
    },
    getProjectSubTypeSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectSubTypeFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectSubType,
  getProjectSubTypeSuccess,
  getProjectSubTypeFailure,
} = getProjectSubTypeSlice.actions;

export default getProjectSubTypeSlice.reducer;
