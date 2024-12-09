import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProductStepOneSlice = createSlice({
  name: 'updatePropertyWalletProductStepOneSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProductStepOne: (state) => {
      state.loading = true
    },
    updatePropertyWalletProductStepOneSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProductStepOneFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletProductStepOne: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletProductStepOne,
  updatePropertyWalletProductStepOneSuccess,
  updatePropertyWalletProductStepOneFailure,
  clearupdatePropertyWalletProductStepOne,
} = updatePropertyWalletProductStepOneSlice.actions

export default updatePropertyWalletProductStepOneSlice.reducer
