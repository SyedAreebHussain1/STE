import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getStaffById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getStaffById = {
  data: null,
  loading: false,
  error: null,
};

const getStaffByIdSlice = createSlice({
  name: "getStaffByIdSlice",
  initialState,
  reducers: {
    getStaffById(state) {
      state.loading = true;
    },
    getStaffByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getStaffByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getStaffById, getStaffByIdSuccess, getStaffByIdFailure } =
  getStaffByIdSlice.actions;

export default getStaffByIdSlice.reducer;
