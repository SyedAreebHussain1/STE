import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getonBoardingIndustry {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getonBoardingIndustry = {
  data: null,
  loading: false,
  error: null,
};

const getonBoardingIndustrySlice = createSlice({
  name: "getonBoardingIndustry",
  initialState,
  reducers: {
    getonBoardingIndustry(state) {
      state.loading = true;
    },
    getonBoardingIndustrySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getonBoardingIndustryFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getonBoardingIndustry,
  getonBoardingIndustrySuccess,
  getonBoardingIndustryFailure,
} = getonBoardingIndustrySlice.actions;

export default getonBoardingIndustrySlice.reducer;
