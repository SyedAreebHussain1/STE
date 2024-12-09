import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AffilateBankDetailsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AffilateBankDetailsType = {
  data: null,
  loading: false,
  error: null,
};

const affilateBankDetailsSlice = createSlice({
  name: "affilateBankDetailsSlice",
  initialState,
  reducers: {
    affilateBankDetails(state) {
      state.loading = true;
    },
    affilateBankDetailsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    affilateBankDetailsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearAffilateBankDetails(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    updateAffilateUserBankDetails(state) {
      state.loading = true;
    },
    updateAffilateUserBankDetailsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    updateAffilateUserBankDetailsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
    },
    clearUpdateAffilateUserBankDetails(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  affilateBankDetails,
  affilateBankDetailsSuccess,
  affilateBankDetailsFailure,
  clearAffilateBankDetails,

  updateAffilateUserBankDetails,
  updateAffilateUserBankDetailsSuccess,
  updateAffilateUserBankDetailsFailure,
  clearUpdateAffilateUserBankDetails,
} = affilateBankDetailsSlice.actions;

export default affilateBankDetailsSlice.reducer;
