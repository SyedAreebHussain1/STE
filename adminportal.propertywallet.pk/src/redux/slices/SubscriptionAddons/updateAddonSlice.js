import { createSlice } from '@reduxjs/toolkit'
export const updateAddonSlice = createSlice({
  name: 'updateAddonSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateAddon: (state) => {
      state.loading = true
    },
    updateAddonSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    updateAddonFailure: (state, action) => {
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

export const { updateAddon, updateAddonSuccess, updateAddonFailure } =
  updateAddonSlice.actions

export default updateAddonSlice.reducer
