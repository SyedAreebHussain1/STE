import { createSlice } from '@reduxjs/toolkit'
export const getProjectSubTypesSlice = createSlice({
  name: 'getProjectSubTypesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProjectSubTypes: (state) => {
      state.loading = true
    },
    getProjectSubTypesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getProjectSubTypesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  getProjectSubTypes,
  getProjectSubTypesSuccess,
  getProjectSubTypesFailure,
} = getProjectSubTypesSlice.actions

export default getProjectSubTypesSlice.reducer
