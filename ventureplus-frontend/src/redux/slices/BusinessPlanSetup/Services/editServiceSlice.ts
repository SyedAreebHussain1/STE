import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface editServiceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: editServiceType = {
  data: null,
  loading: false,
  error: null,
};

const editServiceSlice = createSlice({
  name: "editServiceSlice",
  initialState,
  reducers: {
    editService(state) {
      state.loading = true;
    },
    editServiceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    editServiceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  editService,
  editServiceSuccess,
  editServiceFailure,
} = editServiceSlice.actions;

export default editServiceSlice.reducer;
