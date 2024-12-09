import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProductStep3TempleteSlice = createSlice({
  name: 'updatePropertyWalletProductStep3TempleteSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProductStep3Templete: (state) => {
      state.loading = true
    },
    updatePropertyWalletProductStep3TempleteSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProductStep3TempleteFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // updatePropertyWalletProductStep3Templete: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  updatePropertyWalletProductStep3Templete,
  updatePropertyWalletProductStep3TempleteSuccess,
  updatePropertyWalletProductStep3TempleteFailure,
  // clearCreatePropertyWalletProductStepThree,
} = updatePropertyWalletProductStep3TempleteSlice.actions

export default updatePropertyWalletProductStep3TempleteSlice.reducer
