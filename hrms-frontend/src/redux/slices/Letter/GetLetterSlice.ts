import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLetterType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLetterType = {
  data: null,
  loading: false,
  error: null,
};

const GetLetterSlice = createSlice({
  name: "GetLetter",
  initialState,
  reducers: {
    GetLetter(state) {
      state.loading = true;
    },
    GetLetterSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    GetLetterFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { GetLetter, GetLetterSuccess, GetLetterFailure } =
  GetLetterSlice.actions;

export default GetLetterSlice.reducer;
