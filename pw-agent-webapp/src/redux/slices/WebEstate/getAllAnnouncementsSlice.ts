import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllAnnouncements {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllAnnouncements = {
  data: null,
  loading: false,
  error: null,
};

const getAllAnnouncementsSlice = createSlice({
  name: "getAllAnnouncements",
  initialState,
  reducers: {
    getAllAnnouncements(state) {
      state.loading = true;
    },
    getAllAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllAnnouncements,
  getAllAnnouncementsSuccess,
  getAllAnnouncementsFailure,
} = getAllAnnouncementsSlice.actions;

export default getAllAnnouncementsSlice.reducer;
