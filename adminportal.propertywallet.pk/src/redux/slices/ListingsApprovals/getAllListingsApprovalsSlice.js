import { createSlice } from '@reduxjs/toolkit'
export const getAllListingsApprovalsSlice = createSlice({
  name: 'getAllListingsApprovalsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllListingsApprovals: (state) => {
      state.loading = true
    },
    getAllListingsApprovalsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllListingsApprovalsFailure: (state, action) => {
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
  getAllListingsApprovals,
  getAllListingsApprovalsSuccess,
  getAllListingsApprovalsFailure,
} = getAllListingsApprovalsSlice.actions

export default getAllListingsApprovalsSlice.reducer
