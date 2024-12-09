import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editFacing {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editFacing = {
  data: null,
  loading: false,
  error: null,
};

const editFacingSlice = createSlice({
  name: "editFacing",
  initialState,
  reducers: {
    editFacing(state) {
      state.loading = true;
    },
    editFacingSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editFacingFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { editFacing, editFacingSuccess, editFacingFailure } =
  editFacingSlice.actions;

export default editFacingSlice.reducer;
