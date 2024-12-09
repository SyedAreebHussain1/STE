import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uploadProjectImage {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: uploadProjectImage = {
  data: null,
  loading: false,
  error: null,
};

const uploadProjectImageSlice = createSlice({
  name: "uploadProjectImage",
  initialState,
  reducers: {
    uploadProjectImage(state) {
      state.loading = true;
    },
    uploadProjectImageSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    uploadProjectImageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  uploadProjectImage,
  uploadProjectImageSuccess,
  uploadProjectImageFailure,
} = uploadProjectImageSlice.actions;

export default uploadProjectImageSlice.reducer;
