import { createSlice } from '@reduxjs/toolkit'

export const CreateELoungeSlice = createSlice({
  name: 'CreateELoungeSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    CreateELounge: (state) => {
      state.loading = true
    },
    CreateELoungeSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    CreateELoungeFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { CreateELounge, CreateELoungeSuccess, CreateELoungeFailure } =
  CreateELoungeSlice.actions

export default CreateELoungeSlice.reducer
