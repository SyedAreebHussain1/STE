import { createSlice } from '@reduxjs/toolkit'
export const updatePropertyWalletProjectIslLiveStatusSlice = createSlice({
  name: 'updatePropertyWalletProjectIslLiveStatusSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updatePropertyWalletProjectIslLiveStatus: (state) => {
      state.loading = true
    },
    updatePropertyWalletProjectIslLiveStatusSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updatePropertyWalletProjectIslLiveStatusFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearupdatePropertyWalletProjectIslLiveStatus: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  updatePropertyWalletProjectIslLiveStatus,
  updatePropertyWalletProjectIslLiveStatusSuccess,
  updatePropertyWalletProjectIslLiveStatusFailure,
  clearupdatePropertyWalletProjectIslLiveStatus,
} = updatePropertyWalletProjectIslLiveStatusSlice.actions

export default updatePropertyWalletProjectIslLiveStatusSlice.reducer
