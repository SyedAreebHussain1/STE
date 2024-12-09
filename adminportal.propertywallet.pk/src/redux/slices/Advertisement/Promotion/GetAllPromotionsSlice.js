import { createSlice } from '@reduxjs/toolkit'

export const GetAllPromotionsSlice = createSlice({
  name: 'GetAllPromotionsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllPromotions: (state) => {
      state.loading = true
    },
    getAllPromotionsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllPromotionsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getAllPromotions,
  getAllPromotionsSuccess,
  getAllPromotionsFailure,
} = GetAllPromotionsSlice.actions

export default GetAllPromotionsSlice.reducer
