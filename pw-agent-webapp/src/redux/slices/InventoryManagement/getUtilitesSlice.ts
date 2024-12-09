import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUtilites {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUtilites = {
  data: null,
  loading: false,
  error: null,
};

const getUtilitesSlice = createSlice({
  name: "getUtilites",
  initialState,
  reducers: {
    getUtilites(state) {
      state.loading = true;
    },
    getUtilitesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUtilitesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getUtilites, getUtilitesSuccess, getUtilitesFailure } =
  getUtilitesSlice.actions;

export default getUtilitesSlice.reducer;
