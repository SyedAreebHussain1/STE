import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getNotificationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getNotificationType = {
  data: null,
  loading: false,
  error: null,
};

const getNotificationSlice = createSlice({
  name: "getNotification",
  initialState,
  reducers: {
    getNotification(state) {
      state.loading = true;
    },
    getNotificationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getNotificationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getNotification,
  getNotificationSuccess,
  getNotificationFailure,
} = getNotificationSlice.actions;

export default getNotificationSlice.reducer;
