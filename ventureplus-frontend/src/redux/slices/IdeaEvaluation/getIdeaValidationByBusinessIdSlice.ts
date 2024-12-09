import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getIdeaValidationByBusinessId {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getIdeaValidationByBusinessId = {
  data: null,
  loading: false,
  error: null,
};

const getIdeaValidationByBusinessIdSlice = createSlice({
  name: "getIdeaValidationByBusinessId",
  initialState,
  reducers: {
    getIdeaValidationByBusinessId(state) {
      state.loading = true;
    },
    getIdeaValidationByBusinessIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getIdeaValidationByBusinessIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getIdeaValidationByBusinessId,
  getIdeaValidationByBusinessIdSuccess,
  getIdeaValidationByBusinessIdFailure,
} = getIdeaValidationByBusinessIdSlice.actions;

export default getIdeaValidationByBusinessIdSlice.reducer;
