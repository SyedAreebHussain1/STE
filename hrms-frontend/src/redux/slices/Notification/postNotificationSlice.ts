import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type postNotificationType = {
  data: any;
  loading: boolean;
  error: string | null;
};

const initialState: postNotificationType = {
  data: null,
  loading: false,
  error: null,
};

const postNotificationSlice = createSlice({
  name: "postNotification",
  initialState,
  reducers: {
    postNotification(state) {
      state.loading = true;
    },
    postNotificationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postNotificationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postNotification,
  postNotificationSuccess,
  postNotificationFailure,
} = postNotificationSlice.actions;

export default postNotificationSlice.reducer;
