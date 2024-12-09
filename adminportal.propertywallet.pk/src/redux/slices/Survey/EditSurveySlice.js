import { createSlice } from '@reduxjs/toolkit'

export const EditSurveySlice = createSlice({
  name: 'EditSurveySlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    EditSurvey: (state) => {
      state.loading = true
    },
    EditSurveySuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    EditSurveyFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { EditSurvey, EditSurveySuccess, EditSurveyFailure } =
  EditSurveySlice.actions

export default EditSurveySlice.reducer
