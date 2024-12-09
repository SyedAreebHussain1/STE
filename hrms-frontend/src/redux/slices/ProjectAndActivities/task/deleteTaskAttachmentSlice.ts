import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteTaskAttachmentType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteTaskAttachmentType = {
  data: null,
  loading: false,
  error: null,
};

const deleteTaskAttachmentSlice = createSlice({
  name: "deleteTaskAttachmentSlice",
  initialState,
  reducers: {
    deleteTaskAttachment(state) {
      state.loading = true;
    },
    deleteTaskAttachmentSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteTaskAttachmentFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  deleteTaskAttachment,
  deleteTaskAttachmentSuccess,
  deleteTaskAttachmentFailure,
} = deleteTaskAttachmentSlice.actions;

export default deleteTaskAttachmentSlice.reducer;
