import { createSlice } from '@reduxjs/toolkit'

export const withDrawRequetNoPaginationSlice = createSlice({
  name: 'withDrawRequetNoPaginationSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    withDrawRequetNoPagination: (state) => {
      state.loading = true
    },
    withDrawRequetNoPaginationSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    withDrawRequetNoPaginationFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  withDrawRequetNoPagination,
  withDrawRequetNoPaginationSuccess,
  withDrawRequetNoPaginationFailure,
} = withDrawRequetNoPaginationSlice.actions

export default withDrawRequetNoPaginationSlice.reducer
