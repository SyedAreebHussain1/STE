import { createSlice } from '@reduxjs/toolkit'
export const inventoriesByProjectSlice = createSlice({
  name: 'inventoriesByProjectSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    inventoriesByProject: (state) => {
      state.loading = true
    },
    inventoriesByProjectSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    inventoriesByProjectFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  inventoriesByProject,
  inventoriesByProjectSuccess,
  inventoriesByProjectFailure,
  //   cleargetAllProjects,
} = inventoriesByProjectSlice.actions

export default inventoriesByProjectSlice.reducer
