import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectForSelectField {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectForSelectField = {
  data: null,
  loading: false,
  error: null,
};

const getProjectForSelectFieldSlice = createSlice({
  name: "getProjectForSelectField",
  initialState,
  reducers: {
    getProjectForSelectField(state) {
      state.loading = true;
    },
    getProjectForSelectFieldSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectForSelectFieldFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectForSelectField,
  getProjectForSelectFieldSuccess,
  getProjectForSelectFieldFailure,
} = getProjectForSelectFieldSlice.actions;

export default getProjectForSelectFieldSlice.reducer;
