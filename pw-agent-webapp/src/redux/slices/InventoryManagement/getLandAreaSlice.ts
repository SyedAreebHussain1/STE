import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getLandArea {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getLandArea = {
  data: null,
  loading: false,
  error: null,
};

const getLandAreaSlice = createSlice({
  name: "getLandArea",
  initialState,
  reducers: {
    getLandArea(state) {
      state.loading = true;
    },
    getLandAreaSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getLandAreaFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getLandArea, getLandAreaSuccess, getLandAreaFailure } =
  getLandAreaSlice.actions;

export default getLandAreaSlice.reducer;
