import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getUpCommingBirthdays {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getUpCommingBirthdays = {
  data: null,
  loading: false,
  error: null,
};

const GetUpCommingBirthdaysSlice = createSlice({
  name: "getUpCommingBirthdays",
  initialState,
  reducers: {
    getUpcommingBirthdays(state) {
      state.loading = true;
    },
    getUpcommingBirthdaysSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getUpcommingBirthdaysFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getUpcommingBirthdays, getUpcommingBirthdaysSuccess, getUpcommingBirthdaysFailure } =
  GetUpCommingBirthdaysSlice.actions;

export default GetUpCommingBirthdaysSlice.reducer;
