
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GetRoutesType {
  data: any;
  loading: boolean;
  error: string | null;
}
const initialState: GetRoutesType = {
  data: null,
  loading: false,
  error: null,
};
const getRoutesSlice = createSlice({
  name: "getRoutesSlice",
  initialState,
  reducers: {
    getRoutes(state) {
      state.loading = true;
    },
    getRoutesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null
    },
    getRoutesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});
export const { getRoutes, getRoutesSuccess, getRoutesFailure } =
getRoutesSlice.actions

export default getRoutesSlice.reducer