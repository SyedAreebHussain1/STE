import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUpCommingAnniversaries {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUpCommingAnniversaries = {
  data: null,
  loading: false,
  error: null,
};

const GetUpCommingAnniversariessSlice = createSlice({
  name: "getUpCommingAnniversaries",
  initialState,
  reducers: {
    getUpcommingAnniversaries(state) {
      state.loading = true;
    },
    getUpcommingAnniversariesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUpcommingAnniversariesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getUpcommingAnniversaries, getUpcommingAnniversariesSuccess, getUpcommingAnniversariesFailure } =
  GetUpCommingAnniversariessSlice.actions;

export default GetUpCommingAnniversariessSlice.reducer;
