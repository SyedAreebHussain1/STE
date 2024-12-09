import { createSlice } from '@reduxjs/toolkit'

export const GetAllSurveySlice = createSlice({
  name: 'GetAllSurveySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    GetAllSurvey: (state) => {
      state.loading = true
    },
    GetAllSurveySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    GetAllSurveyFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { GetAllSurvey, GetAllSurveySuccess, GetAllSurveyFailure } =
  GetAllSurveySlice.actions

export default GetAllSurveySlice.reducer
