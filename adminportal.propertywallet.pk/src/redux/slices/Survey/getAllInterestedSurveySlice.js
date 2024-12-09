import { createSlice } from '@reduxjs/toolkit'

export const getAllInterestedSurveySlice = createSlice({
  name: 'getAllInterestedSurveySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    getAllInterestedSurvey: (state) => {
      state.loading = true
    },
    getAllInterestedSurveySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    getAllInterestedSurveyFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  getAllInterestedSurvey,
  getAllInterestedSurveySuccess,
  getAllInterestedSurveyFailure,
} = getAllInterestedSurveySlice.actions

export default getAllInterestedSurveySlice.reducer
