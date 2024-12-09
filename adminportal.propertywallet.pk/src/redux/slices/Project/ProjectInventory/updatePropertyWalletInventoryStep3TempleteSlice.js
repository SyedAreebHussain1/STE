import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletInventoryStep3TempleteSlice = createSlice({
  name: 'updatePropertyWalletInventoryStep3TempleteSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletInventoryStep3Templete: (state) => {
      state.loading = true
    },
    updatePropertyWalletInventoryStep3TempleteSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletInventoryStep3TempleteFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletInventoryStep3Templete: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletInventoryStep3Templete,
  updatePropertyWalletInventoryStep3TempleteSuccess,
  updatePropertyWalletInventoryStep3TempleteFailure,
  clearupdatePropertyWalletInventoryStep3Templete,
} = updatePropertyWalletInventoryStep3TempleteSlice.actions

export default updatePropertyWalletInventoryStep3TempleteSlice.reducer
