import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessesType = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessesSlice = createSlice({
  name: "getBusinessesSlice",
  initialState,
  reducers: {
    getBusinesses(state) {
      state.loading = true;
    },
    getBusinessesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getBusinesses, getBusinessesSuccess, getBusinessesFailure } =
  getBusinessesSlice.actions;

export default getBusinessesSlice.reducer;
