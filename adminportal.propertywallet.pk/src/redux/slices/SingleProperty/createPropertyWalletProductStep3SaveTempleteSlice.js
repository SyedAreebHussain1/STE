import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletProductStep3SaveTempleteSlice = createSlice({
  name: 'createPropertyWalletProductStep3SaveTempleteSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletProductStep3SaveTemplete: (state) => {
      state.loading = true
    },
    createPropertyWalletProductStep3SaveTempleteSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletProductStep3SaveTempleteFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // createPropertyWalletProductStep3SaveTemplete: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  createPropertyWalletProductStep3SaveTemplete,
  createPropertyWalletProductStep3SaveTempleteSuccess,
  createPropertyWalletProductStep3SaveTempleteFailure,
  // clearCreatePropertyWalletProductStepThree,
} = createPropertyWalletProductStep3SaveTempleteSlice.actions

export default createPropertyWalletProductStep3SaveTempleteSlice.reducer
