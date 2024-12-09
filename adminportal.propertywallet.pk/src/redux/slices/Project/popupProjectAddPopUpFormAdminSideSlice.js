import { createSlice } from '@reduxjs/toolkit'
export const popupProjectAddPopUpFormAdminSideSlice = createSlice({
  name: 'popupProjectAddPopUpFormAdminSideSlice', //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    popupProjectAddPopUpFormAdminSide: (state) => {
      state.loading = true
    },
    popupProjectAddPopUpFormAdminSideSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    popupProjectAddPopUpFormAdminSideFailure: (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.payload
    },
    clearPopupProjectAddPopUpFormAdminSide: (state) => {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  popupProjectAddPopUpFormAdminSide,
  popupProjectAddPopUpFormAdminSideSuccess,
  popupProjectAddPopUpFormAdminSideFailure,
  clearPopupProjectAddPopUpFormAdminSide,
} = popupProjectAddPopUpFormAdminSideSlice.actions

export default popupProjectAddPopUpFormAdminSideSlice.reducer
