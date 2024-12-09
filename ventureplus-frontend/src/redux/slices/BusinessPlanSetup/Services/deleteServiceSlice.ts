import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface deleteServiceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: deleteServiceType = {
  data: null,
  loading: false,
  error: null,
};

const deleteServiceSlice = createSlice({
  name: "deleteServiceSlice",
  initialState,
  reducers: {
    deleteService(state) {
      state.loading = true;
    },
    deleteServiceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    deleteServiceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { deleteService, deleteServiceSuccess, deleteServiceFailure } =
  deleteServiceSlice.actions;

export default deleteServiceSlice.reducer;
