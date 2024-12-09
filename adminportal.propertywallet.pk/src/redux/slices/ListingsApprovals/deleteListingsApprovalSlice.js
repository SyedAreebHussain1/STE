import { createSlice } from '@reduxjs/toolkit'
export const deleteListingsApprovalSlice = createSlice({
  name: 'deleteListingsApprovalSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteListingsApproval: (state) => {
      state.loading = true
    },
    deleteListingsApprovalSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteListingsApprovalFailure: (state, action) => {
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
  deleteListingsApproval,
  deleteListingsApprovalSuccess,
  deleteListingsApprovalFailure,
} = deleteListingsApprovalSlice.actions

export default deleteListingsApprovalSlice.reducer
