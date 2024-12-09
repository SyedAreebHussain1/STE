import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DecodeUrlType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DecodeUrlType = {
  data: null,
  loading: false,
  error: null,
};

const decodeUrlSlice = createSlice({
  name: "decodeUrlSlice",
  initialState,
  reducers: {
    decodeUrl(state) {
      state.loading = true;
    },
    decodeUrlSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    decodeUrlFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { decodeUrl, decodeUrlSuccess, decodeUrlFailure } =
  decodeUrlSlice.actions;

export default decodeUrlSlice.reducer;
