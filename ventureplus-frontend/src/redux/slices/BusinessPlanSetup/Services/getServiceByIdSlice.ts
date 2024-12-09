import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getServiceById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getServiceById = {
  data: null,
  loading: false,
  error: null,
};

const getServiceByIdSlice = createSlice({
  name: "getServiceByIdSlice",
  initialState,
  reducers: {
    getServiceById(state) {
      state.loading = true;
    },
    getServiceByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getServiceByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getServiceById, getServiceByIdSuccess, getServiceByIdFailure } =
  getServiceByIdSlice.actions;

export default getServiceByIdSlice.reducer;
