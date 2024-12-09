import { createSlice } from '@reduxjs/toolkit'
export const getAllAddonsSlice = createSlice({
  name: 'getAllAddonsSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllAddons: (state) => {
      state.loading = true
    },
    getAllAddonsSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    getAllAddonsFailure: (state, action) => {
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

export const { getAllAddons, getAllAddonsSuccess, getAllAddonsFailure } =
  getAllAddonsSlice.actions

export default getAllAddonsSlice.reducer
