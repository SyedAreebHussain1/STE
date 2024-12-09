import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getDepartmentForNotificationType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getDepartmentForNotificationType = {
  data: null,
  loading: false,
  error: null,
};

const getDepartmentForNotificationSlice = createSlice({
  name: "getDepartmentForNotification",
  initialState,
  reducers: {
    getDepartmentForNotification(state) {
      state.loading = true;
    },
    getDepartmentForNotificationSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getDepartmentForNotificationFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getDepartmentForNotification,
  getDepartmentForNotificationSuccess,
  getDepartmentForNotificationFailure,
} = getDepartmentForNotificationSlice.actions;

export default getDepartmentForNotificationSlice.reducer;
