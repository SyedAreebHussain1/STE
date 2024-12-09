import { createSlice } from '@reduxjs/toolkit'

export const EloungeGetRolesSlice = createSlice({
  name: 'EloungeGetRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EloungeGetRoles: (state) => {
      state.loading = true
    },
    EloungeGetRolesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    EloungeGetRolesFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  EloungeGetRoles,
  EloungeGetRolesSuccess,
  EloungeGetRolesFailure,
} = EloungeGetRolesSlice.actions

export default EloungeGetRolesSlice.reducer
