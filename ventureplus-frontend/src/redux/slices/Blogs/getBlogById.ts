import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getBlogById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getBlogById = {
  data: null,
  loading: false,
  error: null,
};

const getBlogByIdSlice = createSlice({
  name: "getBlogById",
  initialState,
  reducers: {
    getBlogById(state) {
      state.loading = true;
    },
    getBlogByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBlogByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getBlogById,
  getBlogByIdSuccess,
  getBlogByIdFailure,
} = getBlogByIdSlice.actions;

export default getBlogByIdSlice.reducer;
