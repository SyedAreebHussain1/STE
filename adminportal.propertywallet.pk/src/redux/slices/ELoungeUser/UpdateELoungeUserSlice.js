import { createSlice } from '@reduxjs/toolkit'

export const UpdateELoungeUserSlice = createSlice({
  name: 'UpdateELoungeUserSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    UpdateELoungeUser: (state) => {
      state.loading = true
    },
    UpdateELoungeUserSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    UpdateELoungeUserFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  UpdateELoungeUser,
  UpdateELoungeUserSuccess,
  UpdateELoungeUserFailure,
} = UpdateELoungeUserSlice.actions

export default UpdateELoungeUserSlice.reducer
