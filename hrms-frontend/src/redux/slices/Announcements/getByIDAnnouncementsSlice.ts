import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getByIDAnnouncementsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getByIDAnnouncementsType = {
  data: null,
  loading: false,
  error: null,
};

const getByIDAnnouncementsSlice = createSlice({
  name: "getByIDAnnouncements",
  initialState,
  reducers: {
    getByIDAnnouncements(state) {
      state.loading = true;
    },
    getByIDAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getByIDAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getByIDAnnouncementsClear(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getByIDAnnouncements,
  getByIDAnnouncementsSuccess,
  getByIDAnnouncementsFailure,
  getByIDAnnouncementsClear,
} = getByIDAnnouncementsSlice.actions;

export default getByIDAnnouncementsSlice.reducer;
