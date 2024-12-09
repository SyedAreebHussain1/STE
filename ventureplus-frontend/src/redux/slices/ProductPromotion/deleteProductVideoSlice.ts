import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteProductVideoType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteProductVideoType = {
  data: null,
  loading: false,
  error: null,
};

const deleteProductVideoSlice = createSlice({
  name: "deleteProductVideoSlice",
  initialState,
  reducers: {
    deleteProductVideo(state) {
      state.loading = true;
    },
    deleteProductVideoSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteProductVideoFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteProductVideo,
  deleteProductVideoSuccess,
  deleteProductVideoFailure,
} = deleteProductVideoSlice.actions;

export default deleteProductVideoSlice.reducer;
