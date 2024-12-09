import { createSlice } from '@reduxjs/toolkit'
export const DeleteAdvertisementSlice = createSlice({
  name: 'DeleteAdvertisementSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteAdvertisement: (state) => {
      state.loading = true
    },
    deleteAdvertisementSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteAdvertisementFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  deleteAdvertisement,
  deleteAdvertisementSuccess,
  deleteAdvertisementFailure,
} = DeleteAdvertisementSlice.actions

export default DeleteAdvertisementSlice.reducer
