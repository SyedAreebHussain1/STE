import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postIdeaIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: postIdeaIdType = {
  data: null,
  loading: false,
  error: null,
};

const postIdeaIdSlice = createSlice({
  name: "postIdeaIdSlice",
  initialState,
  reducers: {
    postIdeaId(state) {
      state.loading = true;
    },
    postIdeaIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postIdeaIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
    postIdeaId,
    postIdeaIdSuccess,
    postIdeaIdFailure,
} = postIdeaIdSlice.actions;

export default postIdeaIdSlice.reducer;
