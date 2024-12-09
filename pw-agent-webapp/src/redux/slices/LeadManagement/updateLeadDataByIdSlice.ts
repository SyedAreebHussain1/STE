import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateLeadDataById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateLeadDataById = {
  data: null,
  loading: false,
  error: null,
};

const updateLeadDataByIdSlice = createSlice({
  name: "updateLeadDataByIdSlice",
  initialState,
  reducers: {
    updateLeadDataById(state) {
      state.loading = true;
    },
    updateLeadDataByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateLeadDataByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateLeadDataById,
  updateLeadDataByIdSuccess,
  updateLeadDataByIdFailure,
} = updateLeadDataByIdSlice.actions;

export default updateLeadDataByIdSlice.reducer;
