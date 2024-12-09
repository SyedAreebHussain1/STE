import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getAllLeavesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getAllLeavesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllLeavesSlice = createSlice({
  name: "getAllLeavesSlice",
  initialState,
  reducers: {
    getAllLeaves(state) {
      state.loading = true;
    },
    getAllLeavesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllLeavesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getAllLeaves, getAllLeavesSuccess, getAllLeavesFailure } =
  getAllLeavesSlice.actions;

export default getAllLeavesSlice.reducer;
