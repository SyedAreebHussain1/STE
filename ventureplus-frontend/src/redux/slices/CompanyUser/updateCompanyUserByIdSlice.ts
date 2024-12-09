import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateCompanyUserByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateCompanyUserByIdType = {
  data: null,
  loading: false,
  error: null,
};

const updateCompanyUserByIdSlice = createSlice({
  name: "updateCompanyUserByIdSlice",
  initialState,
  reducers: {
    updateCompanyUserById(state) {
      state.loading = true;
    },
    updateCompanyUserByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateCompanyUserByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateCompanyUserById,
  updateCompanyUserByIdSuccess,
  updateCompanyUserByIdFailure,
} = updateCompanyUserByIdSlice.actions;

export default updateCompanyUserByIdSlice.reducer;
