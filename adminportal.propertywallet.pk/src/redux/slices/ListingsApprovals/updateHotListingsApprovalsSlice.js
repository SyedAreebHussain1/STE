import { createSlice } from '@reduxjs/toolkit'
export const updateHotListingsApprovalsSlice = createSlice({
  name: 'updateHotListingsApprovalsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateHotListingsApprovals: (state) => {
      state.loading = true
    },
    updateHotListingsApprovalsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateHotListingsApprovalsFailure: (state, action) => {
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
  updateHotListingsApprovals,
  updateHotListingsApprovalsSuccess,
  updateHotListingsApprovalsFailure,
} = updateHotListingsApprovalsSlice.actions

export default updateHotListingsApprovalsSlice.reducer
