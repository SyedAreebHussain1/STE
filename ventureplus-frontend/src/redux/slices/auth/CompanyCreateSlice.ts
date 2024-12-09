import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompanyCreateType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyCreateType = {
  data: null,
  loading: false,
  error: null,
};

const CompanyCreateSlice = createSlice({
  name: "CompanyCreate",
  initialState,
  reducers: {
    CompanyCreate(state) {
      state.loading = true;
    },
    CompanyCreateSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    CompanyCreateFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { CompanyCreate, CompanyCreateSuccess, CompanyCreateFailure } =
  CompanyCreateSlice.actions;

export default CompanyCreateSlice.reducer;
