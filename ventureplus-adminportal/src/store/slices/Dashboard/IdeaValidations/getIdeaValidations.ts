import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getIdeaValidationsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getIdeaValidationsType = {
  data: null,
  loading: false,
  error: null,
};

const getIdeaValidationsSlice = createSlice({
  name: "getIdeaValidationsSlice",
  initialState,
  reducers: {
    getIdeaValidations(state) {
      state.loading = true;
    },
    getIdeaValidationsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getIdeaValidationsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getIdeaValidations, getIdeaValidationsSuccess, getIdeaValidationsFailure } =
  getIdeaValidationsSlice.actions;

export default getIdeaValidationsSlice.reducer;
