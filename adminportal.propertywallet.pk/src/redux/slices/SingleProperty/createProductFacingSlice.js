import { createSlice } from '@reduxjs/toolkit'
export const createProductFacingSlice = createSlice({
  name: 'createProductFacingSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createProductFacing: (state) => {
      state.loading = true
    },
    createProductFacingSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createProductFacingFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // createProductFacing: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const {
  createProductFacing,
  createProductFacingSuccess,
  createProductFacingFailure,
  // clearCreatePropertyWalletProductStepThree,
} = createProductFacingSlice.actions

export default createProductFacingSlice.reducer
