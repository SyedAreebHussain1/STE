import { createSlice } from '@reduxjs/toolkit'

export const GetALLReleaseSalariesSlice = createSlice({
  name: 'GetALLReleaseSalariesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetALLReleaseSalaries: (state) => {
      state.loading = true
    },
    GetALLReleaseSalariesSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetALLReleaseSalariesFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetALLReleaseSalaries,
  GetALLReleaseSalariesSuccess,
  GetALLReleaseSalariesFailure,
} = GetALLReleaseSalariesSlice.actions

export default GetALLReleaseSalariesSlice.reducer
