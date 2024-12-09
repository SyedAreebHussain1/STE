import { createSlice } from '@reduxjs/toolkit'
export const createAddonSlice = createSlice({
  name: 'createAddonSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    createAddon: (state) => {
      state.loading = true
    },
    createAddonSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    createAddonFailure: (state, action) => {
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

export const { createAddon, createAddonSuccess, createAddonFailure } =
  createAddonSlice.actions

export default createAddonSlice.reducer
