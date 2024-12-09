import { createSlice } from '@reduxjs/toolkit'
export const createParticipantsSlice = createSlice({
  name: 'createParticipantsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createParticipants: (state) => {
      state.loading = true
    },
    createParticipantsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createParticipantsFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  createParticipants,
  createParticipantsSuccess,
  createParticipantsFailure,
} = createParticipantsSlice.actions

export default createParticipantsSlice.reducer
