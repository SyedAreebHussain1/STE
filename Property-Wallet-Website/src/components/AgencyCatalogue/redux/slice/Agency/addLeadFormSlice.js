import { createSlice } from "@reduxjs/toolkit";

export const addLeadFormSlice = createSlice({
  name: "addLeadFormSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addLeadForm: (state) => {
      state.loading = true;
    },
    addLeadFormSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    addLeadFormFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addLeadForm,
  addLeadFormSuccess,
  addLeadFormFailure,
} = addLeadFormSlice.actions;

export default addLeadFormSlice.reducer;
