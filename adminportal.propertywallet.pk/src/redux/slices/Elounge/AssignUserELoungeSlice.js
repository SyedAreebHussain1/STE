import { createSlice } from '@reduxjs/toolkit'

export const AssignUserELoungeSlice = createSlice({
  name: 'AssignUserELoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    AssignUserELounge: (state) => {
      state.loading = true
    },
    AssignUserELoungeSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    AssignUserELoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  AssignUserELounge,
  AssignUserELoungeSuccess,
  AssignUserELoungeFailure,
} = AssignUserELoungeSlice.actions

export default AssignUserELoungeSlice.reducer
