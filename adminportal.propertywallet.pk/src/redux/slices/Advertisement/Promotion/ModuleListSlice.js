import { createSlice } from '@reduxjs/toolkit'
export const ModuleListSlice = createSlice({
  name: 'ModuleListSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    moduleList: (state) => {
      state.loading = true
    },
    moduleListSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    moduleListFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { moduleList, moduleListSuccess, moduleListFailure } =
  ModuleListSlice.actions

export default ModuleListSlice.reducer
