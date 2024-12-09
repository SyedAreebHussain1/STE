import { createSlice } from '@reduxjs/toolkit'
export const suspendTicketUserSlice = createSlice({
  name: 'suspendTicketUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    suspendTicketUser: (state) => {
      state.loading = true
    },
    suspendTicketUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    suspendTicketUserFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearsuspendTicketUser: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  suspendTicketUser,
  suspendTicketUserSuccess,
  suspendTicketUserFailure,
} = suspendTicketUserSlice.actions

export default suspendTicketUserSlice.reducer
