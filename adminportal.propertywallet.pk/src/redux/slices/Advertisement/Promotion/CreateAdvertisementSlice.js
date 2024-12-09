import { createSlice } from '@reduxjs/toolkit'

export const CreateAdvertisementSlice = createSlice({
  name: 'CreateAdvertisementSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createAdvertisement: (state) => {
      state.loading = true
    },
    createAdvertisementSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    createAdvertisementFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  createAdvertisement,
  createAdvertisementSuccess,
  createAdvertisementFailure,
} = CreateAdvertisementSlice.actions

export default CreateAdvertisementSlice.reducer
