import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface  getAllUserByIdType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState:  getAllUserByIdType = {
  data: null,
  loading: false,
  error: null,
};

const getAllUserByIdSlice = createSlice({
  name: "getAllUserByIdSlice",
  initialState,
  reducers: {
     getAllUserById(state) {
      state.loading = true;
    },
     getAllUserByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
     getAllUserByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {  getAllUserById,  getAllUserByIdSuccess,  getAllUserByIdFailure } =
  getAllUserByIdSlice.actions;

export default getAllUserByIdSlice.reducer;
