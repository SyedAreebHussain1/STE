import { createSlice } from '@reduxjs/toolkit'
export const getAllParticipantsSlice = createSlice({
  name: 'getAllParticipantsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllParticipants: (state) => {
      state.loading = true
    },
    getAllParticipantsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllParticipantsFailure: (state, action) => {
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
  getAllParticipants,
  getAllParticipantsSuccess,
  getAllParticipantsFailure,
} = getAllParticipantsSlice.actions

export default getAllParticipantsSlice.reducer
