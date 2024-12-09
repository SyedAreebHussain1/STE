import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateUserAvailability {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateUserAvailability = {
  data: null,
  loading: false,
  error: null,
};

const updateUserAvailabilitySlice = createSlice({
  name: "updateUserAvailabilitySlice",
  initialState,
  reducers: {
    updateUserAvailability(state) {
      state.loading = true;
    },
    updateUserAvailabilitySuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserAvailabilityFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserAvailability,
  updateUserAvailabilitySuccess,
  updateUserAvailabilityFailure,
} = updateUserAvailabilitySlice.actions;

export default updateUserAvailabilitySlice.reducer;
