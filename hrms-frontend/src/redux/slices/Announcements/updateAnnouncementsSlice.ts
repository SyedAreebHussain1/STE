import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateAnnouncementsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateAnnouncementsType = {
  data: null,
  loading: false,
  error: null,
};

const updateAnnouncementsSlice = createSlice({
  name: "updateAnnouncements",
  initialState,
  reducers: {
    updateAnnouncements(state) {
      state.loading = true;
    },
    updateAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateAnnouncements,
  updateAnnouncementsSuccess,
  updateAnnouncementsFailure,
} = updateAnnouncementsSlice.actions;

export default updateAnnouncementsSlice.reducer;
