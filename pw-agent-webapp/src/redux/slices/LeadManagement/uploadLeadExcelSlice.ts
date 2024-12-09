import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteLeadInventory {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeleteLeadInventory = {
  data: null,
  loading: false,
  error: null,
};

const uploadLeadExcelSlice = createSlice({
  name: "uploadLeadExcelSlice",
  initialState,
  reducers: {
    uploadLeadExcel(state) {
      state.loading = true;
    },
    uploadLeadExcelSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    uploadLeadExcelFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  uploadLeadExcel,
  uploadLeadExcelSuccess,
  uploadLeadExcelFailure,
} = uploadLeadExcelSlice.actions;

export default uploadLeadExcelSlice.reducer;
