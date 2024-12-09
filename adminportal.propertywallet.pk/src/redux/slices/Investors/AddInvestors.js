import { createSlice } from '@reduxjs/toolkit'

export const AddInvestorSlice = createSlice({
  name: 'AddInvestorSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addInvestor: (state) => {
      state.loading = true
    },
    addInvestorSuccess: (state, action) => {
      state.error = null
      state.data = action.payload
      state.loading = false
    },
    addInvestorFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
  },
})

export const { addInvestor, addInvestorSuccess, addInvestorFailure } =
  AddInvestorSlice.actions

export default AddInvestorSlice.reducer
