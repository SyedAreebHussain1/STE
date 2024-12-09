import { createSlice } from '@reduxjs/toolkit'

export const GetEloungeUserNameAndIdSlice = createSlice({
  name: 'GetEloungeUserNameAndIdSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetEloungeUserNameAndId: (state) => {
      state.loading = true
    },
    GetEloungeUserNameAndIdSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    GetEloungeUserNameAndIdFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const {
  GetEloungeUserNameAndId,
  GetEloungeUserNameAndIdSuccess,
  GetEloungeUserNameAndIdFailure,
} = GetEloungeUserNameAndIdSlice.actions

export default GetEloungeUserNameAndIdSlice.reducer
