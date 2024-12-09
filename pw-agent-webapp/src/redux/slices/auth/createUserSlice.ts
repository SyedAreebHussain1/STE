import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createUserType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: createUserType = {
  data: null,
  loading: false,
  error: null,
};

const createUserSlice = createSlice({
  name: "createUserSlice",
  initialState,
  reducers: {
    createUser(state) {
      state.loading = true;
    },
    createUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { createUser, createUserSuccess, createUserFailure } =
  createUserSlice.actions;
export default createUserSlice.reducer;
