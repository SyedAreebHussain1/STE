import { createSlice } from '@reduxjs/toolkit'

export const GetAllAffiliateInBDUsersSlice = createSlice({
  name: 'GetAllAffiliateInBDUsersSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllAffiliateInBDUsers: (state) => {
      state.loading = true
    },
    GetAllAffiliateInBDUsersSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetAllAffiliateInBDUsersFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    GetAllAffiliateInBDUsersClear: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetAllAffiliateInBDUsers,
  GetAllAffiliateInBDUsersSuccess,
  GetAllAffiliateInBDUsersFailure,
  GetAllAffiliateInBDUsersClear,
} = GetAllAffiliateInBDUsersSlice.actions

export default GetAllAffiliateInBDUsersSlice.reducer
