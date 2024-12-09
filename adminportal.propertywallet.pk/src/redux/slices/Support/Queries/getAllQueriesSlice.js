import { createSlice } from '@reduxjs/toolkit'
export const getAllQueriesSlice = createSlice({
  name: 'getAllQueriesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllQueries: (state) => {
      state.loading = true
    },
    getAllQueriesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllQueriesFailure: (state, action) => {
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

export const { getAllQueries, getAllQueriesSuccess, getAllQueriesFailure } =
  getAllQueriesSlice.actions

export default getAllQueriesSlice.reducer
