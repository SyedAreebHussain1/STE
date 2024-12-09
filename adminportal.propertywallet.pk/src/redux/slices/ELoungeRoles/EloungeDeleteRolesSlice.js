import { createSlice } from '@reduxjs/toolkit'

export const EloungeDeleteRolesSlice = createSlice({
  name: 'EloungeDeleteRolesSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EloungeDeleteRoles: (state) => {
      state.loading = true
    },
    EloungeDeleteRolesSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    EloungeDeleteRolesFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  EloungeDeleteRoles,
  EloungeDeleteRolesSuccess,
  EloungeDeleteRolesFailure,
} = EloungeDeleteRolesSlice.actions

export default EloungeDeleteRolesSlice.reducer
