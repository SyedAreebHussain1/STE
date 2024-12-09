import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateUser {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateUser = {
  data: null,
  loading: false,
  error: null,
};

const CreateUserSlice = createSlice({
  name: "CreateUserSlice",
  initialState,
  reducers: {
    CreateUser(state) {
      state.loading = true;
    },
    CreateUserSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    CreateUserFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { CreateUser, CreateUserSuccess, CreateUserFailure } =
  CreateUserSlice.actions;

export default CreateUserSlice.reducer;
