import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postAnnouncementsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postAnnouncementsType = {
  data: null,
  loading: false,
  error: null,
};

const postAnnouncementsSlice = createSlice({
  name: "postAnnouncements",
  initialState,
  reducers: {
    postAnnouncements(state) {
      state.loading = true;
    },
    postAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postAnnouncements,
  postAnnouncementsSuccess,
  postAnnouncementsFailure,
} = postAnnouncementsSlice.actions;

export default postAnnouncementsSlice.reducer;
