import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BusinessModelCanvas {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: BusinessModelCanvas = {
  data: null,
  loading: false,
  error: null,
};

const BusinessModelCanvasSlice = createSlice({
  name: "BusinessModelCanvas",
  initialState,
  reducers: {
    getBusinessModelCanvasColumns(state) {
      state.loading = true;
    },
    getBusinessModelCanvasColumnsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getBusinessModelCanvasColumnsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetBusinessModelCanvasColumns(state) {
      state.loading = false;
      state.data = null;
    },
    postCanvasColumnItem(state) {
      state.loading = true;
    },
    postCanvasColumnItemSuccess(state) {
      state.loading = false;
    },
    postCanvasColumnItemFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    editCanvasColumnItem(state) {
      state.loading = true;
    },
    editCanvasColumnItemSuccess(state) {
      state.loading = false;
    },
    editCanvasColumnItemFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    getCanvasColumnItemById(state) {
      state.loading = true;
    },
    getCanvasColumnItemByIdSuccess(state) {
      state.loading = false;
    },
    getCanvasColumnItemByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCanvasColumnItemById(state) {
      state.loading = true;
    },
    deleteCanvasColumnItemByIdSuccess(state) {
      state.loading = false;
    },
    deleteCanvasColumnItemByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getBusinessModelCanvasColumns,
  getBusinessModelCanvasColumnsSuccess,
  getBusinessModelCanvasColumnsFailure,
  clearGetBusinessModelCanvasColumns,
  postCanvasColumnItem,
  postCanvasColumnItemSuccess,
  postCanvasColumnItemFailure,
  editCanvasColumnItem,
  editCanvasColumnItemSuccess,
  editCanvasColumnItemFailure,
  getCanvasColumnItemById,
  getCanvasColumnItemByIdSuccess,
  getCanvasColumnItemByIdFailure,
  deleteCanvasColumnItemById,
  deleteCanvasColumnItemByIdSuccess,
  deleteCanvasColumnItemByIdFailure,
} = BusinessModelCanvasSlice.actions;

export default BusinessModelCanvasSlice.reducer;
