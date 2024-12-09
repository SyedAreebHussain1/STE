import { createSlice } from '@reduxjs/toolkit'
export const getProjectTypesSlice = createSlice({
  name: 'getProjectTypesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectTypes: (state) => {
      state.loading = true
    },
    getProjectTypesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectTypesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getProjectTypes,
  getProjectTypesSuccess,
  getProjectTypesFailure,
} = getProjectTypesSlice.actions

export default getProjectTypesSlice.reducer
