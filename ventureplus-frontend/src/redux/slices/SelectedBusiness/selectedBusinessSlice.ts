import { createSlice } from "@reduxjs/toolkit";

interface SelectedBusinessState {
  business: any;
}

const initialState: SelectedBusinessState = {
  business: null,
};

const SelectedBusinessSlice = createSlice({
  name: "SelectedBusiness",
  initialState,
  reducers: {
    setCurrentSelectedBusiness: (state, action) => {
      state.business = action.payload;
    },
  },
});

export const { setCurrentSelectedBusiness } = SelectedBusinessSlice.actions;

export default SelectedBusinessSlice.reducer;
