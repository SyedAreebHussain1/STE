import { createSlice } from '@reduxjs/toolkit'
export const deleteHotListingsApprovalSlice = createSlice({
  name: 'deleteHotListingsApprovalSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteHotListingsApproval: (state) => {
      state.loading = true
    },
    deleteHotListingsApprovalSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteHotListingsApprovalFailure: (state, action) => {
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
  deleteHotListingsApproval,
  deleteHotListingsApprovalSuccess,
  deleteHotListingsApprovalFailure,
} = deleteHotListingsApprovalSlice.actions

export default deleteHotListingsApprovalSlice.reducer
