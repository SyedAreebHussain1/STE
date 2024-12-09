import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getInventoryForEdit {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getInventoryForEdit = {
  data: null,
  loading: false,
  error: null,
};

const getInventoryForEditSlice = createSlice({
  name: "getInventoryForEdit",
  initialState,
  reducers: {
    getInventoryForEdit(state) {
      state.loading = true;
    },
    getInventoryForEditSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getInventoryForEditFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getInventoryForEdit,
  getInventoryForEditSuccess,
  getInventoryForEditFailure,
} = getInventoryForEditSlice.actions;

export default getInventoryForEditSlice.reducer;
