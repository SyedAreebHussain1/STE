import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProductStepTwoSlice = createSlice({
  name: 'updatePropertyWalletProductStepTwoSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProductStepTwo: (state) => {
      state.loading = true
    },
    updatePropertyWalletProductStepTwoSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProductStepTwoFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletProductStepTwo: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletProductStepTwo,
  updatePropertyWalletProductStepTwoSuccess,
  updatePropertyWalletProductStepTwoFailure,
  clearupdatePropertyWalletProductStepTwo,
} = updatePropertyWalletProductStepTwoSlice.actions

export default updatePropertyWalletProductStepTwoSlice.reducer
