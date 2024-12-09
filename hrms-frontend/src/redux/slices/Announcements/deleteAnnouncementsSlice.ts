import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteAnnouncementsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteAnnouncementsType = {
  data: null,
  loading: false,
  error: null,
};

const deleteAnnouncementsSlice = createSlice({
  name: "deleteAnnouncements",
  initialState,
  reducers: {
    deleteAnnouncements(state) {
      state.loading = true;
    },
    deleteAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteAnnouncements,
  deleteAnnouncementsSuccess,
  deleteAnnouncementsFailure,
} = deleteAnnouncementsSlice.actions;

export default deleteAnnouncementsSlice.reducer;
