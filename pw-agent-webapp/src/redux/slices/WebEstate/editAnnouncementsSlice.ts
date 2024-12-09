import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editAnnouncements {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editAnnouncements = {
  data: null,
  loading: false,
  error: null,
};

const editAnnouncementsSlice = createSlice({
  name: "editAnnouncements",
  initialState,
  reducers: {
    editAnnouncements(state) {
      state.loading = true;
    },
    editAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editAnnouncements,
  editAnnouncementsSuccess,
  editAnnouncementsFailure,
} = editAnnouncementsSlice.actions;

export default editAnnouncementsSlice.reducer;
