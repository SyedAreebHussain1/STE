import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAnnouncementsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAnnouncementsType = {
  data: null,
  loading: false,
  error: null,
};

const getAnnouncementsSlice = createSlice({
  name: "getAnnouncements",
  initialState,
  reducers: {
    getAnnouncements(state) {
      state.loading = true;
    },
    getAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAnnouncements,
  getAnnouncementsSuccess,
  getAnnouncementsFailure,
} = getAnnouncementsSlice.actions;

export default getAnnouncementsSlice.reducer;
