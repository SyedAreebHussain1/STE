import { createSlice } from "@reduxjs/toolkit";

export const bookMeetingSlice = createSlice({
  name: "bookMeetingSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    bookMeeting: (state) => {
      state.loading = true;
    },
    bookMeetingSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    bookMeetingFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { bookMeeting, bookMeetingSuccess, bookMeetingFailure } =
  bookMeetingSlice.actions;

export default bookMeetingSlice.reducer;
