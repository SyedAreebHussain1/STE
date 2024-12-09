import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateUserEmailAndPhoneNoType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: UpdateUserEmailAndPhoneNoType = {
  data: null,
  loading: false,
  error: null,
};

const updateUserEmailAndPhoneNoSlice = createSlice({
  name: "updateUserEmailAndPhoneNoSlice",
  initialState,
  reducers: {
    updateUserEmailAndPhoneNo(state) {
      state.loading = true;
    },
    updateUserEmailAndPhoneNoSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserEmailAndPhoneNoFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearUpdateUserEmailAndPhoneNo(state,action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  updateUserEmailAndPhoneNo,
  updateUserEmailAndPhoneNoSuccess,
  updateUserEmailAndPhoneNoFailure,
  clearUpdateUserEmailAndPhoneNo
} = updateUserEmailAndPhoneNoSlice.actions;

export default updateUserEmailAndPhoneNoSlice.reducer;
