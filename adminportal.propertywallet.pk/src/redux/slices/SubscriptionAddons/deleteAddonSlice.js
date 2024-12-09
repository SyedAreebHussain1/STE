import { createSlice } from '@reduxjs/toolkit'
export const deleteAddonSlice = createSlice({
  name: 'deleteAddonSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    deleteAddon: (state) => {
      state.loading = true
    },
    deleteAddonSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    deleteAddonFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    // cleargetAllPlots: (state) => {
    //   state.data = null;
    //   state.loading = false;
    //   state.error = null;
    // },
  },
})

export const { deleteAddon, deleteAddonSuccess, deleteAddonFailure } =
  deleteAddonSlice.actions

export default deleteAddonSlice.reducer
