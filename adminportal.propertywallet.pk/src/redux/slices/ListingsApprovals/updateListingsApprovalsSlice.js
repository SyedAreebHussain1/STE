import { createSlice } from '@reduxjs/toolkit'
export const updateListingsApprovalsSlice = createSlice({
  name: 'updateListingsApprovalsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateListingsApprovals: (state) => {
      state.loading = true
    },
    updateListingsApprovalsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateListingsApprovalsFailure: (state, action) => {
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
  updateListingsApprovals,
  updateListingsApprovalsSuccess,
  updateListingsApprovalsFailure,
} = updateListingsApprovalsSlice.actions

export default updateListingsApprovalsSlice.reducer
