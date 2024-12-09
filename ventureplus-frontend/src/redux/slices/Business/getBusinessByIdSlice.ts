import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBusinessById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBusinessById = {
  data: null,
  loading: false,
  error: null,
};

const getBusinessByIdSlice = createSlice({
  name: "getBusinessById",
  initialState,
  reducers: {
    getBusinessById(state) {
      state.loading = true;
    },
    getBusinessByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessById,
  getBusinessByIdSuccess,
  getBusinessByIdFailure,
} = getBusinessByIdSlice.actions;

export default getBusinessByIdSlice.reducer;
