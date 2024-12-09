import { createSlice } from '@reduxjs/toolkit'

export const GetELoungeSaleUserForAssignToLeadSlice = createSlice({
  name: 'GetELoungeSaleUserForAssignToLeadSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetELoungeSaleUserForAssignToLead: (state) => {
      state.loading = true
    },
    GetELoungeSaleUserForAssignToLeadSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    GetELoungeSaleUserForAssignToLeadFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  GetELoungeSaleUserForAssignToLead,
  GetELoungeSaleUserForAssignToLeadSuccess,
  GetELoungeSaleUserForAssignToLeadFailure,
} = GetELoungeSaleUserForAssignToLeadSlice.actions

export default GetELoungeSaleUserForAssignToLeadSlice.reducer
