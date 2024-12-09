import { createSlice } from '@reduxjs/toolkit'

export const PostELoungeSaleUserForAssignToLeadSlice = createSlice({
  name: 'PostELoungeSaleUserForAssignToLeadSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    PostELoungeSaleUserForAssignToLead: (state) => {
      state.loading = true
    },
    PostELoungeSaleUserForAssignToLeadSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    PostELoungeSaleUserForAssignToLeadFailure: (state, action) => {
      state.loading = false

      state.error = action.payload
    },
  },
})

export const {
  PostELoungeSaleUserForAssignToLead,
  PostELoungeSaleUserForAssignToLeadSuccess,
  PostELoungeSaleUserForAssignToLeadFailure,
} = PostELoungeSaleUserForAssignToLeadSlice.actions

export default PostELoungeSaleUserForAssignToLeadSlice.reducer
