import { createSlice } from '@reduxjs/toolkit'
export const getAllCustomDataVoucherSlice = createSlice({
  name: 'getAllCustomDataVoucherSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllCustomDataVoucher: (state) => {
      state.loading = true
    },
    getAllCustomDataVoucherSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllCustomDataVoucherFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllCustomDataVoucher,
  getAllCustomDataVoucherSuccess,
  getAllCustomDataVoucherFailure,
} = getAllCustomDataVoucherSlice.actions

export default getAllCustomDataVoucherSlice.reducer
