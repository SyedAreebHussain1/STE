import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllTopic {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllTopic = {
  data: null,
  loading: false,
  error: null,
};

const getAllTopicSlice = createSlice({
  name: "getAllTopicSlice",
  initialState,
  reducers: {
    getAllTopic(state) {
      state.loading = true;
    },
    getAllTopicSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllTopicFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllTopic(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getAllTopic,
  getAllTopicSuccess,
  getAllTopicFailure,
  clearGetAllTopic,
} = getAllTopicSlice.actions;

export default getAllTopicSlice.reducer;
