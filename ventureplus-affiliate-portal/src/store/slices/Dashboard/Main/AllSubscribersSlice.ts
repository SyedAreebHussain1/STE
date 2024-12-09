import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface allSubscribers {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: allSubscribers = {
  data: null,
  loading: false,
  error: null,
};

const AllSubscribersSlice = createSlice({
  name: "AllSubscribersSlice",
  initialState,
  reducers: {
    getAllSubscribers(state) {
      state.loading = true;
    },
    getAllSubscribersSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllSubscribersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllSubscribers, getAllSubscribersSuccess, getAllSubscribersFailure } =
  AllSubscribersSlice.actions;

export default AllSubscribersSlice.reducer;
