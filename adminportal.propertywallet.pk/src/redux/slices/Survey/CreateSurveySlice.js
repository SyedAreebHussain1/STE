import { createSlice } from '@reduxjs/toolkit'

export const CreateSurveySlice = createSlice({
  name: 'CreateSurveySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    CreateSurvey: (state) => {
      state.loading = true
    },
    CreateSurveySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    CreateSurveyFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { CreateSurvey, CreateSurveySuccess, CreateSurveyFailure } =
  CreateSurveySlice.actions

export default CreateSurveySlice.reducer
