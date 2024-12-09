import { createSlice } from '@reduxjs/toolkit'
export const SearchForAgencyProfileSlice = createSlice({
  name: 'SearchForAgencyProfileSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    SearchForAgencyProfile: (state) => {
      state.loading = true
    },
    SearchForAgencyProfileSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    SearchForAgencyProfileFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearSearchForAgencyProfile: (state, action) => {
      state.loading = false
      state.data = null
    },
  },
})

export const {
  SearchForAgencyProfile,
  SearchForAgencyProfileSuccess,
  SearchForAgencyProfileFailure,
  clearSearchForAgencyProfile,
} = SearchForAgencyProfileSlice.actions

export default SearchForAgencyProfileSlice.reducer
