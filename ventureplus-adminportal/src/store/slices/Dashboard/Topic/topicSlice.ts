import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TopicType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: TopicType = {
  data: null,
  loading: false,
  error: null,
};

const topicSlice = createSlice({
  name: "topicSlice",
  initialState,
  reducers: {
    postTopic(state) {
      state.loading = true;
    },
    postTopicSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    postTopicFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearPostTopic(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },

    updateTopic(state) {
      state.loading = true;
    },
    updateTopicSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    updateTopicFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateTopic(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getTopicAdmin(state) {
      state.loading = true;
    },
    getTopicAdminSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTopicAdminFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetTopicAdmin(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    deleteTopic(state) {
      state.loading = true;
    },
    deleteTopicSuccess(state, action: PayloadAction<any>) {
      state.data = null;
      state.loading = false;
    },
    deleteTopicFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    getTopicByChapterId(state) {
      state.loading = true;
    },
    getTopicByChapterIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getTopicByChapterIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  postTopic,
  postTopicSuccess,
  postTopicFailure,
  clearPostTopic,

  updateTopic,
  updateTopicSuccess,
  updateTopicFailure,
  clearUpdateTopic,

  getTopicAdmin,
  getTopicAdminSuccess,
  getTopicAdminFailure,
  clearGetTopicAdmin,

  deleteTopic,
  deleteTopicSuccess,
  deleteTopicFailure,

  getTopicByChapterId,
  getTopicByChapterIdFailure,
  getTopicByChapterIdSuccess,
} = topicSlice.actions;

export default topicSlice.reducer;
