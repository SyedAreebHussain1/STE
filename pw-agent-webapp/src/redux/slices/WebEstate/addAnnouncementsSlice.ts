import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface addAnnouncements {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addAnnouncements = {
  data: null,
  loading: false,
  error: null,
};

const addAnnouncementsSlice = createSlice({
  name: "addAnnouncements",
  initialState,
  reducers: {
    addAnnouncements(state) {
      state.loading = true;
    },
    addAnnouncementsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addAnnouncementsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addAnnouncements,
  addAnnouncementsSuccess,
  addAnnouncementsFailure,
} = addAnnouncementsSlice.actions;

export default addAnnouncementsSlice.reducer;
