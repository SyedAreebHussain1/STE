import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProductIslLiveStatusSlice = createSlice({
  name: 'updatePropertyWalletProductIslLiveStatusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProductIslLiveStatus: (state) => {
      state.loading = true
    },
    updatePropertyWalletProductIslLiveStatusSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProductIslLiveStatusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletProductIslLiveStatus: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletProductIslLiveStatus,
  updatePropertyWalletProductIslLiveStatusSuccess,
  updatePropertyWalletProductIslLiveStatusFailure,
  clearupdatePropertyWalletProductIslLiveStatus,
} = updatePropertyWalletProductIslLiveStatusSlice.actions

export default updatePropertyWalletProductIslLiveStatusSlice.reducer
