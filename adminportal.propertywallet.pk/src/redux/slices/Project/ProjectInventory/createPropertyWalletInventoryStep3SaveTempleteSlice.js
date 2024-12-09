import { createSlice } from '@reduxjs/toolkit'
export const createPropertyWalletInventoryStep3SaveTempleteSlice = createSlice({
  name: 'createPropertyWalletInventoryStep3SaveTempleteSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createPropertyWalletInventoryStep3SaveTemplete: (state) => {
      state.loading = true
    },
    createPropertyWalletInventoryStep3SaveTempleteSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createPropertyWalletInventoryStep3SaveTempleteFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // createPropertyWalletInventoryStep3SaveTemplete: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  createPropertyWalletInventoryStep3SaveTemplete,
  createPropertyWalletInventoryStep3SaveTempleteSuccess,
  createPropertyWalletInventoryStep3SaveTempleteFailure,
  // clearCreatePropertyWalletProductStepThree,
} = createPropertyWalletInventoryStep3SaveTempleteSlice.actions

export default createPropertyWalletInventoryStep3SaveTempleteSlice.reducer
