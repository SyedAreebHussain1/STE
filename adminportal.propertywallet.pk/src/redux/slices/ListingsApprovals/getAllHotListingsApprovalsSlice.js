import { createSlice } from '@reduxjs/toolkit'
export const getAllHotListingsApprovalsSlice = createSlice({
  name: 'getAllHotListingsApprovalsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllHotListingsApprovals: (state) => {
      state.loading = true
    },
    getAllHotListingsApprovalsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllHotListingsApprovalsFailure: (state, action) => {
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
  getAllHotListingsApprovals,
  getAllHotListingsApprovalsSuccess,
  getAllHotListingsApprovalsFailure,
} = getAllHotListingsApprovalsSlice.actions

export default getAllHotListingsApprovalsSlice.reducer
